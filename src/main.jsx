import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.jsx";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage.jsx";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import PageNotFound from "./pages/PageNotFound.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index element={<HomePage />} />
      <Route path="*" element={<PageNotFound/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
