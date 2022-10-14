import less from "./assets/less.png"
import more from "./assets/more.png"
import { useState } from "react"


const ItemCount = ({stock = 5, initial = 0, onAdd}) => {

    const [count, setCount] = useState(initial) 

   

    const increment =()=>{
    if(count < stock)
        setCount(count +1)
    }

    const decrement =()=>{
        if (count > 0)
        setCount(count -1)
    }

    if(count > stock){

    window.alert("No hay mas stock");
    }

  return (

<div className="contador">

    <h1> {count} </h1> 

   <button onClick={decrement}> <img width= "30px" src={less} alt="menos" /> </button>
    <button onClick={increment}> <img width= "30px" src={more} alt="mas" /> </button>
    <button onClick={()=> onAdd(count)}>Agregar al carrito</button>

</div>  )

    
}

export default ItemCount