import {useState, useEffect} from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

  
  const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    console.log(productId);
    console.log(product);



  useEffect(() => {
    getProductById(productId).then(response => {
        setProduct(response)
    }).finally(() => {
        setLoading(false)
    })
    
}, [productId])


if(loading) {
  return <h1>Cargando...</h1>

}


  return (
    <>
    <h1>Detalle</h1>

    <div>
    <ItemDetail {...product}/>
    </div>
    </>
  )
}
export default ItemDetailContainer

