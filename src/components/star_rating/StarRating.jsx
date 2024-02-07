import "./styles.css";
import PropTypes from "prop-types";

const StarRating = ({ noOfStars = 5 }) => {
  return <div className="star-rating">{[...Array(noOfStars)]}</div>;
};

StarRating.propTypes = {
  noOfStars: PropTypes.number,
};

export default StarRating;
