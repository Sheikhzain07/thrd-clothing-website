import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductPage";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <ProductPage user={user} />
      ) : (
        <LoginPage onLogin={(user) => setUser(user)} />
      )}
    </div>
  );
};

export default App;
