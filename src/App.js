import { useState } from 'react';
import './App.css';
import ProductCard from './Components/Card/ProductCard';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [cart, setCart] = useState([]);
  const handleRemoveFromCart = (productName) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const handleAddtoCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <section className="left-section">
          <ProductCard onAddtoCart={handleAddtoCart} />
        </section>
        <aside className="right-aside">
          <Cart
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </aside>
      </main>
      <footer className="footer">2024 @copyright all reserved</footer>
    </div>
  );
}

export default App;
