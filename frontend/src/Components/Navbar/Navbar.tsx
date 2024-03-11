import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

// interface Props {}

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
            <Link to="/">
                <img className="h-8 w-auto" src={logo} alt=""/>
            </Link>
          <Link to="/search" className="hidden font-bold lg:flex">
              Search
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
        <a
            href="/login"
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Sign-in
          </a>
          <a
            href="/register"
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Sign-up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;