import React, { useState } from "react";

const TodoItem = ({ task, removeTask, toggleDone, changeTitle, texts }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [isError, setIsError] = useState();

  const saveTask = (e) => {
    if (newTitle.trim().length === 0) {
      setIsError(true);
      return;
    }

    changeTitle(task.id, newTitle);
    setIsEdit(false);
    setIsError(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={task.done}
        onClick={() => toggleDone(task.id)}
      />

      {isEdit ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") saveTask(e);
            }}
            autoFocus={true}
            onBlur={saveTask}
          />
          {isError && <div className="error">Title is required</div>}
        </>
      ) : (
        <span
          className={task.done ? "done" : ""}
          onClick={() => setIsEdit(true)}
        >
          {task.title}
        </span>
      )}
      <button className="remove-btn" onClick={() => removeTask(task.id)}>
        {texts.removeBtn}
      </button>
    </div>
  );
};

export default TodoItem;
