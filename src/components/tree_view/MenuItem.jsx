import PropTypes from "prop-types";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  return (
    <li>
      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
