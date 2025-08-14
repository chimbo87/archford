import { useState } from "react";
import Home from "./pages/home/Home";
import RootLayOut from "./components/roots/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contacts/Contact";
import Projects from "./pages/projects/Projects";
;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
