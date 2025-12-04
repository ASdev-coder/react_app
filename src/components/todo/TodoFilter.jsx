import React from 'react';
import FilterButton from './TodoFilterButton';

const TodoFilter = ({ setActiveFilter, activeFilter, filtersData, filterLabels }) => (
  <div className="todo-filter">
    {Object.keys(filtersData).map((key) => (
      <FilterButton
        key={key}
        label={filterLabels[key]}
        active={activeFilter === key}
        onClick={() => setActiveFilter(key)}
      />
    ))}
  </div>
);


export default TodoFilter;
