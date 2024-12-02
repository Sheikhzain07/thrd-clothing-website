import React, { useEffect, useState } from "react";
import { loadCSV } from "../utils/dataHandler";

const ProductPage = ({ user }) => {
  const [notPurchased, setNotPurchased] = useState([]);
  const [purchased, setPurchased] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const products = await loadCSV("/products.csv");
        const purchases = await loadCSV("/purchase_history.csv");

        const userPurchases = purchases.filter((p) => p.userID === user.userID);
        const purchasedProductIDs = new Set(
          userPurchases.map((p) => p.ProductID)
        );

        const purchasedProducts = products.filter((product) =>
          purchasedProductIDs.has(product.productID)
        );
        const notPurchasedProducts = products.filter(
          (product) => !purchasedProductIDs.has(product.productID)
        );

        // setPurchased(
        //   purchasedProducts.sort((a, b) =>
        //     a.ProductName.localeCompare(b.ProductName)
        //   )
        // );
        // setNotPurchased(
        //   notPurchasedProducts.sort((a, b) =>
        //     a.ProductName.localeCompare(b.ProductName)
        //   )
        // );
        setNotPurchased(
          notPurchasedProducts
            .filter((product) => product.ProductName) // Ensure ProductName exists
            .sort((a, b) => a.ProductName.localeCompare(b.ProductName))
        );

        setPurchased(
          purchasedProducts
            .filter((product) => product.ProductName) // Ensure ProductName exists
            .sort((a, b) => a.ProductName.localeCompare(b.ProductName))
        );
      } catch (err) {
        console.error("Error loading product data:", err);
      }
    };

    loadData();
  }, [user]);

  return (
    <div className="product-page">
      <h1 className="username">Welcome, {user.username}</h1>

      <h2 className="heading">New items based on your purchased history</h2>
      <div className="product-list">
        {notPurchased.map((product) => (
          <div key={product.productID} className="product-card">
            <img src={product.ImageURL} alt={product.ProductName} />
            <h2>{product.ProductName}</h2>
            <p>Category: {product.Category}</p>
            <p>Price: Rs.{product.Price}</p>
          </div>
        ))}
      </div>

      <h2 className="heading">You Purchased items</h2>
      <div className="product-list">
        {purchased.map((product) => (
          <div key={product.productID} className="product-card">
            <img src={product.ImageURL} alt={product.ProductName} />
            <h2>{product.ProductName}</h2>
            <p>Category: {product.Category}</p>
            <p>Price: Rs.{product.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
