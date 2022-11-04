
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";



const Cart = () => {
    const {cart,total,clearCart} = useCart ();
    

    if (cart.length === 0)
    return (
        <div>
        <p> No hay elementos en el carrito </p>
        <button> <Link to='/'> Comenzar compra</Link></button>
        </div>
    )

    return (
        <div>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            <p>Total a Pagar: $ {total}</p>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button><Link className='Button' to='/checkout' >Checkout</Link></button>
        </div>

    )
}

export default Cart 
