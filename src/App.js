import './App.css';
import ProductCard from './Components/Card/ProductCard';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <header className='header'>
        
     <Navbar/>
      </header>
      <main className='main-content'>
        <section className='left-section'>
          <ProductCard/>
        </section>
        <aside className='right-aside'>
        
        <Cart/>
        </aside>
      </main>
      <footer className='footer'>
        2024 @copyright all reserved
      </footer>
    </div>
  );
}

export default App;
