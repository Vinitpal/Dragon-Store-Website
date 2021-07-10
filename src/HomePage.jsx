import Navbar from "./components/navbar/Navbar";
import LandingSection from "./components/landing-section/LandingSection";
import Products from "./components/products/Products";
import BannerSection from "./components/banner-section/bannerSection";
import Line from "./components/dividing-line/Line";
import Categories from "./components/category-section/Categories";
import ReviewSection from "./components/review-section/ReviewSection";
import Footer from "./components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <Line />
      <BannerSection />
      <Line />
      <Products />
      <Line />
      <Categories />
      <Line />
      <ReviewSection />
      <Line />
      <Footer />
    </div>
  );
};

export default HomePage;
