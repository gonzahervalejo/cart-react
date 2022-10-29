import { useContext} from 'react';
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({id, img, name, price,category }) => {
   
    console.log(id);

   // const ThemeContext = createContext();
    //const user = useContext(UserContext);
    //const darkMode = useContext(ThemeContext);

    return (
        <div className='item'>
            <header>
            <h2>{name}</h2>
            </header>
            <p>{darkMode}</p>
            <picture>
            <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
           <section>
           <p>{category}</p>
            <p>Precio:$ {price}</p> 
            </section>
            <footer>
        
            <Link to={`/detail/${id}`}>Ver detalle</Link> 
           </footer>
        </div>
    )
}

export default Item  

