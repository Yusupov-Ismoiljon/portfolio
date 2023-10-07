import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ReactLayouts from "./layouts/ReactLayouts";
import Hero from "./components/Hero";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ReactLayouts />}>
        <Route path="/" element={<Hero />}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
