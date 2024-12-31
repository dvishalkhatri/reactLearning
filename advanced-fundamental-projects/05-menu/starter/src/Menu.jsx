import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        return <MenuItem {...menuItem} key={menuItem.id} />;
      })}
    </div>
  );
};
export default Menu;
