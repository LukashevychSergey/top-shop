import Header from './components/Header';
import CardList from './components/CardList';
import { goods } from './data/goods';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CardList goods={goods} />
    </div>
  );
}

export default App;
