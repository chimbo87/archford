import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contacts/Contact";
import Projects from "./pages/projects/Projects";
import RootLayOut from "./components/roots/RootLayOut";

// Create router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  ),
  {
    // Add future flag for better navigation behavior
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;