import './App.css';

import Header from './components/Header';
import Product from './components/Product';

function App() {
  const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eius nam corrupti, quia, praesentium aliquid unde voluptatem et laborum illo error sit culpa itaque atque molestiae fugiat, ab sed iure.'

  return (
    <div className="App">
      <Header />
      <section className="products">
        <Product title="A Sign of Four" author="Sir Author Conan Doyle" text={ text } />
        <Product title="A Study in Scarlet" author="Sir Author Conan Doyle" text={ text } />
        <Product title="Baskervilles Hound" author="Sir Author Conan Doyle" text={ text } />
        <Product title="The Adventures of Sherlock Holmes" author="Sir Author Conan Doyle" 
          text={ text } />
      </section>
    </div>
  );
}

export default App;
