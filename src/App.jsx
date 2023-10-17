import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ReactLayouts from "./layouts/ReactLayouts";
import Hero from "./components/Hero";
import Header from "./components/Header";


export default function App() {


  return (
    <div>
      <ReactLayouts />
    </div>
  );
}
