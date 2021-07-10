import "./productPage.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="product-page">
        <div className="image">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="product"
          />
        </div>
        <div className="info">
          <h1 className="title">Lorem Ipsum Dolor</h1>
          <p className="price">150 RS</p>
          <p className="rating">
            ⭐⭐⭐⭐⭐ <span className="review">1 review</span>
          </p>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ducimus eveniet commodi sapiente at nam aut vero, quia,
            reiciendis provident libero eligendi modi. Tempora.
          </div>
          <div className="quantity">
            <button>-</button>
            <input type="number" placeholder="1" min="0" max="99" />
            <button>+</button>
          </div>
          <button className="add-to-cart-btn">add to cart</button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
