import Tabs from "./Tabs";
import "./style.css";

const RandomComponent = () => (
  <>
    <h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
      enim ipsum quaerat, ea sequi autem totam optio incidunt perferendis
      consequuntur veniam in recusandae ullam est sapiente. Autem asperiores
      expedita illo.
    </h3>
  </>
);

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <p>Content for Tab 1.</p>,
    },
    {
      label: "Tab 2",
      content: <p>Content for Tab 2.</p>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    const selectedTab = tabs[currentTabIndex];
    // Perform meaningful action based on the selectedTab
    console.log(selectedTab.label);
    // Additional code to handle the selected tab
  }

  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
};

export default TabTest;
