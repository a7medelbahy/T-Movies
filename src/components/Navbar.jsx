import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import "./components.css";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);
  const NavbarLinks = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      path: "/movies",
      title: "Movies",
    },
    {
      id: 3,
      path: "/series",
      title: "TV Series",
    },
  ];
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <Link
          className="navbar-brand text-white d-flex align-items-center gap-2"
          to="/"
        >
          <img src={Logo} className="img-fluid d-block" alt="logo" />
          T-Movies
        </Link>
        <button
          onClick={() => setExpandNav((prev) => !prev)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {expandNav ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
        <div
          className={
            expandNav
              ? "navbar-collapse collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {NavbarLinks.map((navItem) => {
              return (
                <li className="nav-item fw-bold" key={navItem.id}>
                  <NavLink
                    onClick={() => setExpandNav(false)}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={navItem.path}
                  >
                    {navItem.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
