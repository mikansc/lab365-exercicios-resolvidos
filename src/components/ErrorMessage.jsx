import PropTypes from "prop-types";

import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return message !== "" ? (
    <span className={styles.errorMessage}>{message}</span>
  ) : null;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
