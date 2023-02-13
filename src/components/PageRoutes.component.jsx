import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import Post from "../pages/Post";

function PageRoutes({}) {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post/:id" element={<Post />} /> 
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default PageRoutes;
