const TaskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), title: action.payload, done: false }];

    case "remove":
      return state.filter((task) => task.id !== action.payload);

    case "ChangeStatus":
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, done: !task.done };
        }
        return task;
      });

    case "edit":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, title: action.payload.newTitle };
        }
        return task;
      });

    case "fill":
      return action.payload;

    default:
      return state;
  }
};

export default TaskReducer;
