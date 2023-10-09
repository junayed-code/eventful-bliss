import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const routesHeaderData = {
  services: {
    title: "OUR SERVICES",
    image: "/images/event-planning.jpg",
  },
  events: {
    title: "OUR EVENTS",
    image: "/images/spring-party.jpg",
  },
  about: {
    title: "ABOUT US",
    image: "/images/holiday-lights.jpg",
  },
};

export default function General() {
  const { pathname } = useLocation();
  const { title, image } = routesHeaderData[pathname.replace(/\//g, "")] || {};

  return (
    <>
      <Header>
        <Navbar className="absolute bg-opacity-60" />
        <Banner className="min-h-[60vh]" image={image}>
          <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
        </Banner>
      </Header>
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
