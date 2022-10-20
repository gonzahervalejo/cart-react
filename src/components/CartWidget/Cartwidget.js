import cart from './assets/cart.png'
import './Cartwidget.css'

const Cartwidget = () => {
    return (
        <div to='/cart' className='cart-widget'>
            <img width="30px" src={cart} alt='cart'/>
            {0}
        </div>
    )
}

export default Cartwidget