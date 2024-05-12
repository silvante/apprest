import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route path="/" index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
