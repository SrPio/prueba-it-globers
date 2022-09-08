import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Newsletter from './components/newsletter/Newsletter';
import Products from './components/products/Products';
import Social from './components/social/Social';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <Social />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
