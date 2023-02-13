import { Link } from "react-router-dom";
/*Fix the Navbar to have dropdown menu on smaller screens */

function Navbar({}) {
  return (
    <nav className="flex justify-between mx-3 my-4 md:mx-4 md:my-5 lg:mx-5 lg:my-6 items-center content-center">
        <Link to="/" className="text-2xl font-semibold md:text-3xl">
          <h1>echosblog</h1>
        </Link>
        <ul className="flex gap-x-3 md:gap-x-4 lg:gap-x-6 relative">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </ul>
    </nav>
  );
}

export default Navbar;
