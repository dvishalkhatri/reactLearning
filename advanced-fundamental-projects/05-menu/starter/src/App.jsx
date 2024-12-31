import { useState } from 'react';
import Title from './Title';
import items from './data';
import Menu from './Menu';
import Categories from './Categories';
const categories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const filterItems = (category) => {
    setMenuItems(items);
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = menuItems.filter((menu) => menu.category === category);
    setMenuItems(newItems);
    return;
  };
  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
