const Card = ({ title, price, img }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="tv" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <div className="btn">
        <button className="buy">Buy Now</button>
        <button className="addCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
