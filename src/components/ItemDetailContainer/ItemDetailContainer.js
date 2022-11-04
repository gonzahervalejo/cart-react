import {useState, useEffect} from "react"
// import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams, useNavigate } from "react-router-dom"
import { getDoc,doc } from "firebase/firestore"
import { db } from "../../Service/Firebase/Index"



const ItemDetailContainer = ({setCart}) => {

  
  const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    const navigate = useNavigate()

    console.log(productId);
    console.log(product);



  useEffect(() => {
    const docRef = doc(db, 'products', productId)

    getDoc(docRef).then(response => {

        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProduct(productAdapted)
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

    <div  >
            <button  onClick={() => navigate(-1)}>Atras</button>
            <ItemDetail  {...product} />
        </div>
    </>
  )
}
export default ItemDetailContainer

