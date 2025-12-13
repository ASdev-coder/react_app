import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import Users from "./pages/Users";
import Register from "./pages/Register";
import SelectDate from "./pages/SelectDate";
import { getSearchUsers, getUser, getUsers } from "./loaders/usersLoaders";
import { getProduct, getProducts } from "./loaders/ProductsLoaders";
import Products from "./pages/Products";
import Weather from "./pages/Weather";
import { getCityWeather } from "./loaders/WeatherInfo";
import User from "./pages/User";
import Product from "./pages/Product";
import { Search } from "./pages/Search";
import Basket from "./pages/Basket";


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
        loader: getUsers,
      },
      {
        path: "registration",
        element: <Register />,
      },
      {
        path: "select-date",
        element: <SelectDate />,
      },
      {
        path: "products",
        element: <Products />,
        loader: getProducts,
      },
      {
        path: "weather",
        element: <Weather />,
        loader: getCityWeather,
      },
      {
        path: "users/:login",
        loader: getUser,
        element: <User />,
      },
      {
        path: "search",
        loader: getSearchUsers,
        element: <Search />,
      },
      {
        path: "products/:id",
        loader: getProduct,
        element: <Product />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
]);
export default router;