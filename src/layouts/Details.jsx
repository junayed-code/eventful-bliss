import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export default function Details() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Container.Main>
        <Outlet />
      </Container.Main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
