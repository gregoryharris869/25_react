import MenuList from "./MenuList";
import "./styles.css";
import PropTypes from "prop-types";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

TreeView.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default TreeView;
