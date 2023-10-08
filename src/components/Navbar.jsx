import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Button from "./Button";
import Container from "./Container";

export default function Navbar({ className = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(open => !open);
  }

  return (
    <nav
      className={"bg-white w-full py-2 top-0 left-0 z-20 "
        .concat(className)
        .trim()}
    >
      <Container className="navbar">
        <div className="navbar-start w-3/4 lg:w-1/2">
          <Link to="/" className="text-2xl font-bold">
            Eventful Bliss
          </Link>
        </div>
        <div className="navbar-center hidden lg:inline-flex">
          <ul className="flex items-center space-x-8 text-lg">
            <li>
              <NavLink className="hover:underline underline-offset-4" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:underline underline-offset-4"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:underline underline-offset-4"
                to="/event"
              >
                Event
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:underline underline-offset-4"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 w-3/12 lg:w-1/2">
          <div className="hidden lg:flex items-center space-x-2">
            <Button className="btn-neutral text-lg">Sign In</Button>
            <Button className="btn-neutral btn-outline text-lg">
              Register
            </Button>
          </div>

          <label
            tabIndex={0}
            className="p-2 lg:hidden cursor-pointer"
            onClick={handleMenuToggle}
          >
            <IoMdMenu className="text-3xl" />
          </label>

          {/* Mobile navbar menu */}
          <div
            className={`grid lg:hidden fixed inset-0 z-50 overflow-y-auto ${
              isMenuOpen ? "visible" : "invisible"
            }`}
          >
            <div
              onClick={handleMenuToggle}
              className="hero-overlay bg-opacity-40"
            ></div>
            <div
              className={`w-80 sm:w-96 px-5 py-4 justify-self-end bg-white col-start-1 row-start-1 duration-200 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <label className="flex justify-end mb-2">
                <span tabIndex={0} onClick={handleMenuToggle}>
                  <IoMdClose className="text-3xl cursor-pointer" />
                </span>
              </label>
              <ul className="menu text-lg">
                <li>
                  <NavLink
                    className="hover:underline underline-offset-4"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:underline underline-offset-4"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:underline underline-offset-4"
                    to="/event"
                  >
                    Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:underline underline-offset-4"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>

              <div className="flex flex-col gap-2 mt-5">
                <Button className="btn-info text-lg">Sign In</Button>
                <Button className="btn-outline text-lg">Register</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
