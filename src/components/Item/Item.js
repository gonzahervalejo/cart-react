import { Link } from 'react-router-dom'

const Item = ({ img, name, price,id }) => {
    return (
        <div>
            <header>
            <h2>{name}</h2>
            </header>
            <picture>
            <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
           <section>
            <p>Precio:$ {price}</p> 
            </section>
            <footer>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
           </footer>
        </div>
    )
}

export default Item