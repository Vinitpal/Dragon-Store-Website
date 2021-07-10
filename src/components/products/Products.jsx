import React from "react";
// import axios from "axios";
import Card from "./Card";
import { NavLink } from "react-router-dom";

import "./Products.css";

const products = [
  {
    category: "men's clothing",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 2,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.3,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
  },
  {
    category: "men's clothing",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    id: 3,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55.99,
    title: "Mens Cotton Jacket",
  },
  {
    category: "men's clothing",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    id: 4,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 15.99,
    title: "Mens Casual Slim Fit",
  },
  {
    category: "women's clothing",
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    id: 18,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    price: 9.85,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
  },
  {
    category: "women's clothing",
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    id: 19,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    price: 7.95,
    title: "Opna Women's Short Sleeve Moisture",
  },
  {
    category: "women's clothing",
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    id: 20,
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    price: 12.99,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
  },
];

const Header = (props) => {
  return (
    <div className="products">
      {products.map((data, idx) => (
        <NavLink to="/product">
          <Card
            key={idx}
            title={data.title}
            price={data.price}
            img={data.image}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Header;

// ----- FAILED ATTEMPT WITH FETCHING API -----
// TODO: MAKE YOUR OWN API AND WORK ON IT

// const Header = (props) => {
//   let [responseData, setResponseData] = React.useState("");

//   const fetchProducts = React.useCallback(() => {
//     axios({
//       method: "GET",
//       url: "https://fakestoreapi.com/products",
//     })
//       .then((response) => {
//         setResponseData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   React.useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   return (
//     <div className="products" onLoad={fetchProducts}>
//       {console.log(responseData)}
//       {[...responseData].map((data, idx) => (
//         <Card
//           key={idx}
//           title={data.title}
//           price={data.price}
//           img={data.image}
//         />
//       ))}
//     </div>
//   );
// };
