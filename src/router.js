import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import Users from "./pages/Users";
import Register from "./pages/Register";
import SelectDate from "./pages/SelectDate";
import { getUsers } from "./loaders/usersLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoList />,
      },
      {
        path: "users",
        element: <Users />,
        loader: getUsers
      },
      {
        path: "registration",
        element: <Register />,
      },
      {
        path: "select-date",
        element: <SelectDate />,
      },
    ],
  },
]);
export default router;