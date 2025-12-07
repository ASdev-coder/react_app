import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/I18nProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <I18nProvider>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </I18nProvider>
);
