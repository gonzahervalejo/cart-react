
import Item from "../Item/Item"

const ItemList = ({products,setPage}) => {
  return (
    <div>
        { products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} price={prod.price} setPage={setPage}/>)}
    </div>
)
}

export default ItemList