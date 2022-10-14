import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from "./components/ItemListContainer/Itemlistcontainer";


function App() {



  return (
    <div className="App">

      <Navbar/>
    <ItemListContainer greeting={"Tienda Ziba"}/>
    
    </div>
  );
}

export default App;

