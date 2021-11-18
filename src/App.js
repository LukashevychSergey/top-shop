import Header from './components/Header';
import CardList from './components/CardList';
import { goods } from './data/goods';
import './App.css';
import { ShopContext, ShopProvider } from './components/ShopProvider';

function App() {
  return (
    <ShopProvider>
      <div className="App">
        <ShopContext.Consumer>
          {({ goods }) => goods.length}
        </ShopContext.Consumer>
        <Header />
        <CardList goods={goods} />
      </div>
    </ShopProvider>
  );
}

export default App;
