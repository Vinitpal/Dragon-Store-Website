import Category from "./Category";

import "./category.css";

const items = [
  {
    img: "https://cdn.discordapp.com/attachments/641570546198249472/705384189591289886/adventure-1867074_1920.jpg",
    title: "splash chic",
    info: "women's wet gear",
  },
  {
    img: "https://cdn.discordapp.com/attachments/641570546198249472/705384215671472230/child-567426_1920.jpg",
    title: "kids climber",
    info: "children gear",
  },
  {
    img: "https://cdn.discordapp.com/attachments/641570546198249472/705384161711620217/adult-1850181_1920.jpg",
    title: "pack it in",
    info: "backpacks for climbing",
  },
  {
    img: "https://cdn.discordapp.com/attachments/641570546198249472/705384195651796992/adventure-1850912_1920.jpg",
    title: "nature's ac",
    info: "men's shorts",
  },
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="item-wrapper">
        {items.map((item, i) => (
          <Category
            key={i}
            img={item.img}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
