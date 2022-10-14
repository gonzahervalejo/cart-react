import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock"; 
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        getProducts().then(response => {
            console.log(response)
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])



    const onAdd =(count)=>{

        console.log(`Compraste ${count} unidades`);

    }

    if(loading) {
        return <h1>Loading...</h1>
    }


     return (
        <div className='contenedorLista1'>
             <h1>{greeting}</h1>;
            <h1>Listado de Productos</h1>
            <ItemCount initial={0} stock = {5} onAdd={onAdd} />
            <ItemList products={products}/>
        </div>
   
   )}

export default ItemListContainer;