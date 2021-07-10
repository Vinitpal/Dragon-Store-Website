import "./banner-section.css";

const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="banner-wrapper">
        <img
          className="boots"
          src="https://cdn.pixabay.com/photo/2018/08/04/00/18/hiking-shoes-3583017_960_720.jpg"
          alt="boot1"
        />
        <div>
          <h1>couples retreat weekend</h1>
          <h3>save an extra 30%</h3>
          <p>when you buy two pairs of boots</p>
        </div>
        <img
          className="boots"
          src="https://cdn.pixabay.com/photo/2017/09/26/13/48/winter-boots-2788671_960_720.png"
          alt="boot2"
        />
      </div>
    </section>
  );
};

export default BannerSection;
