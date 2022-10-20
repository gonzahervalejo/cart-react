import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({name, price, img, description,stock}) => {

  const onAdd =(count)=>{

        console.log(`Compraste ${count} unidades`);

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
    <p>Price:${price}</p>
    <p>Description: {description}</p>
    </section>
     <ItemCount initial={1}  stock = {stock} onAdd={onAdd} />
    </div>
  )
}
export default ItemDetail

