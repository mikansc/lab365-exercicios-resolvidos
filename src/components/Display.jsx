import PropTypes from "prop-types";

function Display({ value = "nenhum valor informado" }) {
  return <p>Você adicionou {value} produtos na lista</p>;
}

Display.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Display;
