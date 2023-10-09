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
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";
import ASOFade from "../../aos";

export default function Home() {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      <Header>
        <Navbar className="absolute bg-opacity-60" />
        <Banner className="min-h-screen" image={HomeBannerImg}>
          <ASOFade fade="right" delay="500">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold">
              We excel at making your dreams a reality and creating
              unforgettable memories
            </h1>
          </ASOFade>
          <ASOFade fade="left" delay="500">
            <p className="mb-5 sm:text-lg font-medium">
              We're here to assist you with everything from your grandest ideas
              to the tiniest worries, so you can relax and have a pleasant time.
            </p>
          </ASOFade>
          <ASOFade face="up" offset="50" delay="1000" duration="600">
            <Button className="btn-secondary text-lg">Contact Us</Button>
          </ASOFade>
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
