interface ProductCardProps {
    id: string;
    nombre: string;
    description: string;
    price: string;
    imageUrl: string;
  }
  
  const ProductCard = ({ id, nombre, description, price, imageUrl }: ProductCardProps) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
          <a href={`/productos/${id}`} className="btn btn-primary">Ver más</a>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  