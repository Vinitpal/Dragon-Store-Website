import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-item">
          <p className="footer-heading">customer support</p>
          <div className="footer-list">
            <ul>
              <li>contact us</li>
              <li>order tracker</li>
              <li>returns & refund</li>
              <li>size guide</li>
              <li>store locator</li>
              <li>site map</li>
            </ul>
          </div>
        </div>

        <div className="footer-item">
          <p className="footer-heading">company info</p>
          <div className="footer-list">
            <ul>
              <li>about us</li>
              <li>careers</li>
              <li>sustainability</li>
              <li>affliates</li>
              <li>students</li>
              <li>mobile apps</li>
            </ul>
          </div>
        </div>

        <div className="footer-item">
          <p className="footer-heading">privacy & terms</p>
          <div className="footer-list">
            <ul>
              <li>privacy & security</li>
              <li>statements</li>
              <li>terms & conditioins</li>
            </ul>
          </div>
        </div>

        <div className="footer-item social">
          <p className="footer-heading">follow me</p>
          <div className="footer-list social">
            <span>
              <a href="https://twitter.com/vinitpal_arora">
                <i className="fab fa-twitter-square"></i>
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/vineet7089">
                <i className="fab fa-facebook-f"></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/Vinitpal">
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/vinitpal-singh-0718a3191">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <h3>email updates</h3>
            <p>Exclusive sales, special offers and more.</p>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <button className="footer-btn">sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
