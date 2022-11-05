import { useContext,useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { NotificationContext } from "../Notification/NotificationService"
import { addDoc, collection,getDocs,query,where,documentId,writeBatch} from "firebase/firestore"
import { db } from "../../Service/Firebase/Index"
import { useNavigate } from "react-router-dom"
import Form from "../Form/Form"




const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const { cart, total, clearCart } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  const navigate = useNavigate()

  const [personalData, setPersonalData] = useState(false)

  const [datosComprador, setDatosComprador] = useState({}) 

  const completarDatos = (name, surname, address, phone, email) =>{
          setDatosComprador({name, surname, address, phone, email})
          setPersonalData(true)
      }

  const createOrder = async () => {
      setLoading(true)

      try {
          const objOrder = {
              buyer: datosComprador,
              items: cart,
              total: total
          }
          
          const batch = writeBatch(db)

          const outOfStock = []

          const ids = cart.map(prod => prod.id)
  
          const productsRef = collection(db, 'products')
  
          const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

          const { docs } = productsAddedFromFirestore

          docs.forEach(doc => {
              const dataDoc = doc.data()
              const stockDb = dataDoc.stock

              const productAddedToCart = cart.find(prod => prod.id === doc.id)
              const prodQuantity = productAddedToCart?.quantity

              if(stockDb >= prodQuantity) {
                  batch.update(doc.ref, { stock: stockDb - prodQuantity })
              } else {
                  outOfStock.push({ id: doc.id, ...dataDoc})
              }
          })

          if(outOfStock.length === 0) {
              await batch.commit()

              const orderRef = collection(db, 'orders')

              const orderAdded = await addDoc(orderRef, objOrder)

              clearCart()

              setTimeout(() => {
                  navigate('/')
              }, 3000)

              setNotification('success', `El id de su orden es: ${orderAdded.id}`)
          } else {
             setNotification('error','hay productos que estan fuera de stock')
          }

      } catch (error) {
          console.log(error)
      } finally {
          setLoading(false)
      }
      
  }

  if(loading) {
      return <h1>Se esta generando su orden...</h1>
  }

  return (
    <div>

    <h1>Completa los datos para poder generar la orden</h1>

    <Form completoDatos={completarDatos}/>

    { personalData 
    ?<button onClick={createOrder}>Generar Pedido</button> 
    : ""}

</div>
  )
}

export default Checkout