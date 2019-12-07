import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onRemove, onLinkClick, completed, text }) => (
  <li
    onClick={onLinkClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
    <button onClick={onRemove}>X</button>
  </li>
);

Todo.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
