const Midnav = () => {
  return (
    <div className="search-area">
      <form>
        {/* Seach Box and BTN */}
        <input
          className="search-box"
          type="text"
          name="search-box"
          placeholder="What can we help you find?"
        />
        <button className="search-btn">
          <i className="far fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Midnav;
