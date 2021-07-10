import Navbar from "../navbar/Navbar";
import "./cart-section.css";
import Footer from "../footer/Footer";

const CartSection = () => {
  return (
    <div>
      <Navbar />
      <div className="cart-section">
        <div className="cartRow">
          <h2>Your Cart</h2>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="cartInfo">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="product"
          />
          <div className="cart-data">
            <h1>Lorem Ipsum dolor</h1>
            <p>Pikachu bag</p>
          </div>
          <div className="price">150 Rupees</div>
          <div className="quantity">
            <input type="number" placeholder="1" min="1" max="99" />
          </div>
          <div className="total">150 Rupees</div>
        </div>

        <div className="last-row">
          <div className="instructions">
            <h3>Special Instruction for seller</h3>
            <textarea
              name="cart-special-instruction"
              id=""
              cols="50"
              rows="10"
            ></textarea>
          </div>
          <div className="checkout">
            <h3>
              <small>Subtotal:</small>
              150 Rupees
            </h3>
            <i>Shipping & taxes calculated at checkout</i>
            <div className="btn">
              <button className="update-cart">Update Cart</button>
              <button className="checkout-btn">Check Out </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartSection;
