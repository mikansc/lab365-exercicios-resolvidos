import PropTypes from "prop-types";

function Display({ value = 0 }) {
  return <p>Você adicionou {value} produtos na lista</p>;
}

Display.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Display;
