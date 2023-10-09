import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import Button from "./Button";
import Container from "./Container";
import useAuth from "../hooks/useAuth";
import ProfilePlaceholder from "../assets/images/profile.svg";

export default function Navbar({ className = "" }) {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(open => !open);
  }

  function handleLogOut() {
    logOut().then(() => {
      toast("You are logged out.");
      navigate("/login");
    });
  }

  const navLinks = (
    <>
      <li>
        <NavLink className="hover:underline underline-offset-4" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:underline underline-offset-4" to="/about">
          About
        </NavLink>
      </li>
      {currentUser && (
        <>
          <li>
            <NavLink
              className="hover:underline underline-offset-4"
              to="/events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:underline underline-offset-4"
              to="/services"
            >
              Services
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav
      className={"bg-white w-full py-2 top-0 left-0 z-20 "
        .concat(className)
        .trim()}
    >
      <Container className="navbar">
        {/* Navbar Start Section */}

        <div className="navbar-start w-3/4 lg:w-1/2">
          <Link to="/" className="text-2xl font-bold">
            Eventful Bliss
          </Link>
        </div>

        {/* Navbar Middle Section */}

        <div className="navbar-center hidden lg:inline-flex">
          <ul className="flex items-center space-x-8 text-lg">{navLinks}</ul>
        </div>

        {/* Navbar End Section */}
        <div className="navbar-end gap-2 w-3/12 lg:w-1/2">
          <div>
            {currentUser ? (
              <UserProfile
                name={currentUser.displayName}
                image={currentUser.photoURL}
                email={currentUser.email}
                onLogOut={handleLogOut}
              />
            ) : (
              <div className="hidden lg:flex items-center space-x-2">
                <Link
                  to="/login"
                  className="btn normal-case rounded-md btn-neutral text-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn normal-case rounded-md btn-neutral btn-outline text-lg"
                >
                  Register
                </Link>
              </div>
            )}
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
              <ul className="menu text-lg">{navLinks}</ul>

              <div className="flex flex-col gap-2 mt-5">
                <Link
                  to="/login"
                  className="btn normal-case rounded-md btn-info text-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn normal-case rounded-md btn-neutral btn-outline text-lg"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

function UserProfile({ image, name, email, onLogOut }) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={image || ProfilePlaceholder} alt={name} />
        </div>
      </label>

      <div className="mt-3 z-[1] p-2 px-4 shadow dropdown-content bg-base-100 rounded-md w-52">
        <div className="text-sm">
          <h5 className="font-semibold">{name}</h5>
          <p className="">{email}</p>
        </div>
        <hr className="my-2 border-gray-300" />
        <ul tabIndex={0} className="menu menu-sm p-0">
          <Button onClick={onLogOut} className="btn-ghost">
            Logout
          </Button>
        </ul>
      </div>
    </div>
  );
}
