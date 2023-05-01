import React from 'react';
import Card from './Card';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      image: 'https://source.unsplash.com/featured/?food',
      title: 'Pav Bhaji',
      description:
        'Our signature dish made with fresh vegetables and spices, served with buttered pav.',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?indian-food',
      title: 'Masala Dosa',
      description:
        'A crispy crepe made with fermented rice and lentil batter, stuffed with spicy potato filling.',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/featured/?street-food',
      title: 'Vada Pav',
      description:
        'A popular street food made with a potato fritter and served in a bread bun with spicy chutney.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-[#05050a] ">
      {menuItems.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Menu;
