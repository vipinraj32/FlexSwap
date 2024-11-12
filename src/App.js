
import './App.css';
import Contact from './components/contect/Contact';

import Feature from './components/feature/Feature';
import Products from './components/flexswapProduct/Products';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Header/>
       <Products/>
       <Feature/>
        <Contact/>
        <Footer/>
      
      </header>
    </div>
  );
}

export default App;
