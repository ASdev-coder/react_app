import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import TodoList from "./components/todo/TodoList";
import User from "./components/learn/User";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/I18nProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <TodoList />
        ),
      },
      {
        path: "user",
        element: (
          <User />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <I18nProvider>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </I18nProvider>
);
