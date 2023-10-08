import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function Main() {
  return (
    <>
      <Header>
        <Navbar className="absolute bg-opacity-60" />
        <Banner />
      </Header>
      <Outlet />
    </>
  );
}
