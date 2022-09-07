import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
    </div>
  );
}

export default App;
