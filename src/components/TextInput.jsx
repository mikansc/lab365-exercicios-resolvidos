import PropTypes from "prop-types";

import styles from "./TextInput.module.css";

function TextInput({ label, id, onChange }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        id={id}
        onChange={onChange}
        onBlur={() => console.log("o input de texto disparou o evento de blur")}
      />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
