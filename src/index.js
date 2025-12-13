import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/I18nProvider";
import BasketProvider from "./providers/BasketProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BasketProvider>
    <I18nProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18nProvider>
  </BasketProvider>
);
