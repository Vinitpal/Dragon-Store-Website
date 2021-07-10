import "./review-section.css";

const ReviewSection = () => {
  return (
    <div className="review-section">
      <div className="review-wrapper">
        <div className="mountain-img">
          <img
            src="https://cdn.discordapp.com/attachments/641570546198249472/705335351459446866/sunset-1757593_1920.jpg"
            alt="mountain"
          />
        </div>
        <div className="review-text-wrapper">
          <div className="review-text">
            <h3>Trail Review</h3>
            <h1>ashpalt</h1>
            <p>national park</p>
            <button className="review-btn">see review</button>
          </div>
        </div>
        <div className="design-border"></div>
      </div>
    </div>
  );
};

export default ReviewSection;
