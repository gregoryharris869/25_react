// import Accordion from "./components/accordion/Accordion";
// import RandomColor from "./components/random_color/RandomColor";
// import StarRating from "./components/star_rating/StarRating";

import ImageSlider from "./components/image_slider/ImageSlider";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
