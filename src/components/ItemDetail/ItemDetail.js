import ItemCount from "../ItemCount/ItemCount";
import React,{useState} from "react";

const ItemDetail = ({name, price, img, description,stock,category}) => {

const [goToCart, setGoToCart] = useState(()=>{return false})


  const onAdd =()=>{

        setGoToCart(true)
   

    }
  return (
    <div>
      <picture>
         <img src={img} alt={name}  />
         </picture>
         <header>
    <h2>{name}</h2>
    </header>
    <section>
    <p>{category}</p>
    <p>Price:${price}</p>
    <p>Description: {description}</p>
    </section>
 

 
    {
     
     
      goToCart
      ? <button>Producto Agregado</button>
      
      :<ItemCount initial={1}  stock = {stock} onAdd={onAdd} />
      
    }
     
    </div>

    
  )
}
export default ItemDetail

