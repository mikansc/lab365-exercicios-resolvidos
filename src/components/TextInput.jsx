import PropTypes from "prop-types";

function TextInput({ label, id, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        onChange={onChange}
        onBlur={() => console.log("o input de texto disparou o evento de blur")}
      />
    </>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
