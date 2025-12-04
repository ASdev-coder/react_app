import React, { useEffect, useReducer, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";
import TaskReducer from "../../reducers/TaskReducer";
import { useContext } from "react";
import I18nContext from "../../contexts/I18nContext";

const TodoList = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, list);
  const [activeFilter, setActiveFilter] = useState("all");
  const {texts} = useContext(I18nContext);

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    const activeFilterFromLocalStorage = localStorage.getItem("activeFilter");

    if (tasksFromLocalStorage) {
      dispatch({ type: "fill", payload: JSON.parse(tasksFromLocalStorage) });
    }

    if (activeFilterFromLocalStorage) {
      setActiveFilter(activeFilterFromLocalStorage);
    }


  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter);
  }, [activeFilter]);

  const addTask = (title) => {
    dispatch({ type: "add", payload: title });
  };

  const removeTask = (id) => {
    dispatch({ type: "remove", payload: id })
  };

  const toggleDone = (id) => {
    dispatch({ type: "ChangeStatus", payload: id });
    };

  const changeTitle = (id, newTitle) => {
    dispatch({ type: "edit", payload: { id, newTitle } });
    };

  const filtersData = {
    all: () => true,
    done: (task) => task.done,
    todo: (task) => !task.done,
  };

  const filterLabels = {
    all: texts.allFilter,
    done: texts.doneFilter,
    todo: texts.todoFilter,
  };

  return (
    <div className="todo">
      <h1>{texts.todoList}</h1>

      <TodoForm addTask={addTask} texts={texts} />

      <div className="todo-panel">
        <TodoFilter setActiveFilter={setActiveFilter} activeFilter={activeFilter} filtersData={filtersData} filterLabels={filterLabels}/>

        <div className="todo-list">
          {tasks.filter(filtersData[activeFilter]).map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleDone={toggleDone}
              changeTitle={changeTitle}
              texts={texts}
            />
          ))}
        </div>
        <div>
          {tasks.filter((task) => task.done).length} {texts.from} {tasks.length}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
