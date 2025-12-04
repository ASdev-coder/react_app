import React from 'react';

const TodoFilterButton = ({ label, active, onClick }) => (
  <button onClick={onClick} className={active ? "active-filter" : ""}>
    {label}
  </button>
);

export default TodoFilterButton;
