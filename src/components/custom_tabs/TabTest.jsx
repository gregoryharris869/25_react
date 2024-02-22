import Tabs from "./Tabs";
import "./style.css";

function RandomComponent() {
  return (
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
      blanditiis a magni ipsa? Sit debitis hic, rerum optio inventore aut ad
      iste, mollitia quo consequatur ex quos laudantium unde!
    </h3>
  );
}

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
