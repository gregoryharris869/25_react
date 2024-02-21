import { useEffect, useState, useRef } from "react";
import "./styles.css";
import PropTypes from "prop-types";

const ScrollIndicator = ({ url }) => {
  const effectRan = useRef(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Define fetchData function at the root of the component
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (errorMsg) {
      console.log(errorMsg);
      setErrorMsg(errorMsg.message);
    }
  }

  useEffect(() => {
    if (effectRan.current === false) {
      // Call fetchData function only if effectRan.current is false
      fetchData(url);
      effectRan.current = true;
    }
  }, [url, effectRan]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const Scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((Scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  console.log(data, scrollPercentage);

  // Loading & error
  if (loading) {
    return <div>Loading data.</div>;
  } else if (errorMsg) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

ScrollIndicator.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ScrollIndicator;
