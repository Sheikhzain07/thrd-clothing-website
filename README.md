# Thrd Clothing Website (Responsive) Using ReactJS

The [Thrd Clothing Website]() is a lightweight and extensible solution for showcasing personalized product listings with simple authentication and data management.<br> Built using ReactJS, this website contains two pages, one is the Login Page and the second is a Product Page<br>

## Key Features:
### Login Page: 
- Users can log in with credentials stored in users.csv.
- Invalid credentials display an error message: "Invalid credentials, please use a correct credential."
### Error Handling:
- Graceful handling of missing or malformed data from CSV files.
- Logs errors and provides feedback to users during loading issues.
### Product Page:
- Displays a personalized product listing based on the user's purchase history.
- **Not Purchased** Row(1st row): Lists products the user has not purchased, sorted alphabetically by product name.
- **Purchased** Row(2nd row): Lists products the user has purchased, also sorted alphabetically by product name.
- Each product card includes:
  1. Product Name
  2 .Category
  3 .Price
  4 .Placeholder Image (or from ImageURL in the CSV).
### Product Page:
- **Users Data**: users.csv contains user details for authentication.
- **Purchase History**: purchase_history.csv maps users to purchased product IDs.
- **Products Data**: products.csv contains details like product name, category, price, and image URLs.
- Data is dynamically loaded and parsed using the **Papa Parse** library.
### Technology Stack:
- Built using **React.js** for a modern and interactive UI.
- Fully responsive design for seamless experience across devices (desktop and mobile).
### Responsive Design:
- Centralized layout with adaptive styles ensuring a clean and user-friendly interface..<br>
###### This website is a lightweight and extensible solution for showcasing personalized product listings with simple authentication and data management.
