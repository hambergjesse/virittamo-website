import PropTypes from "prop-types";

import { motion } from "framer-motion";

export const Hamburger = ({ onClick }) => {
  return (
    <motion.svg
      viewBox="0 0 100 80"
      width="30"
      height="30"
      fill="#050505"
      onClick={onClick}
      id="header__hamburger"
      initial={{ opacity: 0, ease: "easeInOut" }}
      animate={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <rect width="100" height="16"></rect>
      <rect y="30" width="100" height="16"></rect>
      <rect y="60" width="100" height="16"></rect>
    </motion.svg>
  );
};

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const Hamburger_X = ({ onClick }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width="30"
      height="30"
      fill="#050505"
      onClick={onClick}
      id="header__hamburger"
      initial={{ opacity: 0, ease: "easeInOut" }}
      animate={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <rect
        x="0"
        y="42"
        width="100"
        height="16"
        transform="rotate(45 50 50)"
      ></rect>
      <rect
        x="0"
        y="42"
        width="100"
        height="16"
        transform="rotate(-45 50 50)"
      ></rect>
    </motion.svg>
  );
};

Hamburger_X.propTypes = {
  onClick: PropTypes.func.isRequired,
};
