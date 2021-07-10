const Category = ({ img, title, info }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="content-overlay"></div>
        <img className="content-image" src={img} alt="category-item" />
        <div className="content-details fadeIn-bottom">
          <h2 className="content-title">View All</h2>
        </div>
      </div>
      <div className="card-text">
        <h1>{title}</h1>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Category;
