import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import FrostedGlassBg from "../components/FrostedGlassBg";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

export default function Registration() {
  const { state } = useLocation();
  const { currentUser, loading } = useAuth();

  if (currentUser) {
    return <Navigate to={state || "/"} />;
  }

  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <Container.Main>
        <FrostedGlassBg className="bg-gradient-to-r from-indigo-500/70 via-purple-500/70 to-pink-500/70">
          <Outlet />
        </FrostedGlassBg>
      </Container.Main>

      <Footer />
      {loading && <Loading />}
    </>
  );
}
