# ShoppingCart

## Description
ShoppingCart is a React-based project designed to provide an interactive product cart experience. It uses Vite for a fast development environment and integrates React Router for seamless navigation. The products are fetched dynamically from the [DummyJSON API](https://dummyjson.com/), and the global state management is handled through the `useContext` hook, enabling easy access to functions and states across components.

## Features
- **Product Listing Page**: View a list of all products fetched from DummyJSON.
- **Product Details Page**: Click on a product to view detailed information.
- **Add to Cart**: Add products to the cart directly from the product listing or details page.
- **Cart Functionality**:
  - View the total price and quantity of items in the cart.
  - See all the added products with details on the checkout page.
- **Button States**:
  - "Add to Cart" button is disabled for products already added to the cart.
  - "Checkout" button is disabled when the cart is empty.

## Tech Stack
- **Vite**: Fast and optimized development environment.
- **React**: Component-based UI development.
- **React Router**: For routing between pages (e.g., product list, details, checkout).
- **useContext**: For efficient state and function sharing among components.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/taneracar/ShoppingCart.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ShoppingCart
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173`.

## Usage
1. Browse the product listing page to see all available products.
2. Click on a product to view its details.
3. Add products to your cart using the "Add to Cart" button.
4. Go to the checkout page to view all the items in your cart, their total quantity, and the overall price.
5. Complete your checkout or modify the cart as needed.

## Project Structure
```
ShoppingCart/
├── public/
├── src/
│   ├── components/    # Reusable React components
│   ├── context/       # Context API setup for global state
│   ├── pages/         # Individual pages (Product List, Product Details, Checkout)
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## API Integration
The project fetches products from the [DummyJSON API](https://dummyjson.com/). Ensure you have an active internet connection to access the API data.

## Future Improvements
- Add user authentication for personalized cart management.
- Implement a backend for persisting cart data.
- Enhance the UI/UX with better styling and animations.
- Add support for multiple categories or filtering options.

## Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
Happy Coding!

