import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from "./components/ItemListContainer/Itemlistcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { CartProvider } from "./components/CartContext/CartContext";
import Cart from "./components/Cart/Cart";

import { NotificationProvider } from './components/Notification/NotificationService';

function App() {

  

  return (
    <div className="App">

<NotificationProvider>
      <CartProvider>
      
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer/> }/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            < Route path = '/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
       
        </CartProvider>

        </NotificationProvider>
    </div>
  );
}

export default App;

