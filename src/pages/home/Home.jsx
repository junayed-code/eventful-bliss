import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Container from "../../components/Container";
import FeaturedEvents from "./sections/FeaturedEvents";
import Testimonials from "./sections/Testimonials";
import OurFeaturedServices from "./sections/OurFeaturedServices";
import HomeBannerImg from "../../assets/images/banner.jpg";

export default function Home() {
  return (
    <>
      <Header>
        <Navbar className="absolute bg-opacity-60" />
        <Banner image={HomeBannerImg}>
          <h1 className="mb-5 text-4xl sm:text-5xl font-bold">
            We excel at making your dreams a reality and creating unforgettable
            memories
          </h1>
          <p className="mb-5 sm:text-lg font-medium">
            We're here to assist you with everything from your grandest ideas to
            the tiniest worries, so you can relax and have a pleasant time.
          </p>
          <Button className="btn-secondary text-lg">Contact Us</Button>
        </Banner>
      </Header>
      <Container.Main>
        <FeaturedEvents />
        <OurFeaturedServices />
        <Testimonials />
      </Container.Main>
      <Footer />
    </>
  );
}
