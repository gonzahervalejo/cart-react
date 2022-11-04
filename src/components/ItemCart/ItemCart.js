import React from "react";
import { CartContext} from "../CartContext/CartContext";
import {useContext} from "react";
import { NotificationContext } from "../Notification/NotificationService";

const ItemCart = ({product}) => {
    
    const { removeItem } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext)

    const handleRemove = (id) => {
        removeItem(id);
        setNotification('success', `Se elimino correctamente`);
    }
return (    
    <div >
        <picture>
   <img src={product.img} />
   </picture>
        <h1 className="name">{product.name}</h1>
      
        <p className="price">Precio U: $ {product.price}</p>
        <p className="cantidad">Cantidad {product.quantity}</p>
        <p className="SubTotal">Subtotal: $ {product.quantity * product.price}</p>
        <button onClick={ ()=> handleRemove(product.id)}> Eliminar</button>

    </div>
)
}

export default ItemCart


{/* <div>
<picture>
   <img src={img} alt={name}  />
   </picture>
   <header>
<h2>{name}</h2>
</header>
<section>
<p>{category}</p>
<p>Price:$ {price}</p>
<p>Description: {description}</p>
</section */}