import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
};

MenuList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default MenuList;
