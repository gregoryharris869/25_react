import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabsContent, onChange = () => {} }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    if (typeof onChange === "function") {
      onChange(getCurrentIndex);
    }
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <button
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={index}
          >
            <span className="label">{tabItem.label}</span>
          </button>
        ))}
      </div>
      <div className="content">
        {tabsContent.length === 0 ? null : tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabsContent: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default Tabs;
