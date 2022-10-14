const Item = ({ img, name, price }) => {
    return (
        <div>
            <img src={img} alt={name} style={{ width: 100}}/>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )
}

export default Item