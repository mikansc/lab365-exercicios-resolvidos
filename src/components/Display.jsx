import PropTypes from "prop-types";

function Display({ value = "nenhum valor informado" }) {
  return <p>{value}</p>;
}

Display.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Display;
