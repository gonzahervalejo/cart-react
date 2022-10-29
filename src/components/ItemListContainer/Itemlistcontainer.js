
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory  } from "../asyncMock"; 
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"



const ItemListContainer = ({}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    
    const { categoryId } = useParams()

    //hook se ejecuta una sola vez, cuando se renderiza el componente
    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId).then(response => { //trabajo con asincronismo
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
     }, [categoryId])



    if(loading) {
        return <h1>Loading...</h1>
    } 


     return (
      
         <div>
         
            <h1>Listado de Productos</h1>
            <ItemList products={products} />
          
        </div>
   
   )}

export default ItemListContainer;