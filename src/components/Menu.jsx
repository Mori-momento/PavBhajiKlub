import React, { useEffect, useState } from "react";
import Card from "./Card";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const getMenuData = async () => {
      const response = await fetch("menu.json");
      const data = await response.json();
      setMenuData(data);
    };
    getMenuData();
  }, []);

  return (
    <div className="grid grid-cols-4 bg-black gap-4">
      {menuData.map((item) => (
        <Card
          key={item.dish_name}
          image={item.image_url}
          dish_name={item.dish_name}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Menu;
