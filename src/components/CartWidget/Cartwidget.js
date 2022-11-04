import cart from './assets/cart.png'
import './Cartwidget.css'
import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext' 
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Cartwidget = () => {

    const { totalQuantity} = useContext(CartContext);
    const navigate = useNavigate();
    console.log("Total Quanty" + totalQuantity);
    return (
  /*       <button to='/cart' className="cart-widget" onClick={() => navigate('/cart')} value="fav_HTML">
        <img width="30px" src={cart} alt='cart'/>
         value ={totalQuantity}
        </button> */
        <div className="widget">
        <button className="CartWidget"> 
          <Link to='/cart'>  <img id="carrito" width="30px" src={cart} alt="" /></Link>
          <span className='number' id='number'>{totalQuantity}</span>
         
        </button>
      </div>
    )
}

export default Cartwidget

