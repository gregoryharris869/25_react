import MenuList from "./MenuList";
import "./styles.css";
import PropTypes from "prop-types";

const TreeView = ({ menus = [] }) => {
  return (
    <section className="tree-view-container">
      <MenuList list={menus} />
    </section>
  );
};

TreeView.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default TreeView;
