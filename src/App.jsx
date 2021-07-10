import ProductPage from "./components/product-page/ProductPage";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
// import CartSection from "./components/cart-section/CartSection";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/product" component={ProductPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
