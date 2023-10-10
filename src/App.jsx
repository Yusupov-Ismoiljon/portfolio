import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ReactLayouts from "./layouts/ReactLayouts";
import Hero from "./components/Hero";
import Header from "./components/Header";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ReactLayouts />}>
        <Route path="/" element={<Hero />}/>
        <Route path="/hea " element={<Header />}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
