import BannerImage from "../assets/images/banner.jpg";
import Button from "./Button";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${BannerImage}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content mt-16 py-5 text-center text-base-100">
        <div className="max-w-xl">
          <h1 className="mb-5 text-4xl sm:text-5xl font-bold">
            We excel at making your dreams a reality and creating unforgettable
            memories
          </h1>
          <p className="mb-5 sm:text-lg font-medium">
            We're here to assist you with everything from your grandest ideas to
            the tiniest worries, so you can relax and have a pleasant time.
          </p>
          <Button className="btn-secondary text-lg">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
