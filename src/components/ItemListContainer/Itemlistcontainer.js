
import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory  } from "../asyncMock"; 
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Service/Firebase/Index";



const ItemListContainer = ({}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    
    const { categoryId } = useParams()

    //hook se ejecuta una sola vez, cuando se renderiza el componente
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

    getDocs(collectionRef).then(response => {
        console.log(response)
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            console.log(data)

            return { id: doc.id, ...data }
        })

        setProducts(productsAdapted)

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