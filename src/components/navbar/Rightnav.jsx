import { NavLink } from "react-router-dom";

const Rightnav = () => {
  return (
    <div className="right-nav">
      <NavLink to="/cart">
        <div className="cart">
          <i class="far fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </div>
      </NavLink>
      <div className="username-wrapper">
        <h3>Vinitpal</h3>
      </div>
      <div className="log-out">
        <p>Log Out</p>
      </div>
      {/* <div className="pfp">
        <img
          src="https://lh3.googleusercontent.com/-fSyU5_zMCUc/XXPnLIfIYVI/AAAAAAAAB0s/wknHnOv-tAw7iLAmQD_zEfEd7KdbjSpSACEwYBhgL/w140-h140-p/2019-09-07.jpg"
          alt="pfp"
        ></img>
      </div> */}
    </div>
  );
};
export default Rightnav;
