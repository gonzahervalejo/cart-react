import ItemCount from "../ItemCount/ItemCount";
import { useContext } from 'react'
import { useCart } from '../CartContext/CartContext';
import { Link } from "react-router-dom";
import { NotificationContext } from "../Notification/NotificationService";



const ItemDetail = ({id,name, price, img, description,stock,category}) => {



const { addItem,isInCart, getProductQuantity} = useCart();

const { setNotification } = useContext(NotificationContext)


  const onAdd =(count)=>{

    const productToAdd = {
      id,
      name,
      img,
      price,
      category,
      description
  }

   if(count > 0){
  
  addItem (productToAdd, count);
  setNotification('success', `Se agrego correctamente ${count} ${name}`)

  }else{

    setNotification('error', `Tienes que agregar algun elemento`);
  }
}
  

  //   addItem(productToAdd, count);
  //   alert("Se agrego un elemento " + getProductQuantity(id) + " " + productToAdd.name + " " + productToAdd.price );
      
  //  }
  const quantityAdded = getProductQuantity(id);
  
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
    <p>Price:$ {price}</p>
    <p>Description: {description}</p>
    </section>


    <footer className='ItemFooter'>
                { stock !== 0 ? <ItemCount onAdd={onAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                {
                    // !isInCart(id) 
                        //? 
                        // : <Link to='/cart' className='Option'>Finalizar compra</Link>
                        isInCart(id) && <Link to='/cart' className='Option' style={{ backgroundColor: 'blue'}}>Finalizar compra</Link>
                }
                
            </footer>

 
     
    </div>

    
  )
}
export default ItemDetail

