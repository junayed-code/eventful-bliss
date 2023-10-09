import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function ErrorPage() {
  return (
    <Section className="grid place-items-center min-h-screen p-4 sm:p-6 bg-amber-50">
      <Section.Content className="grid sm:grid-cols-2 max-w-4xl">
        <div>
          <img
            src="https://i.imgur.com/Q2BAOd2.png"
            alt="This Page is Not on the Map"
          />
        </div>
        <div className="text-center">
          <h1 className="text-[150px] font-extrabold">404</h1>
          <h2 className="text-2xl font-bold">
            Oh no, the page you were searching for cannot be found.
          </h2>
          <p className="font-semibold text-xl mt-4">
            If you want, you can go back to the{" "}
            <Link to="/" className="text-blue-400">
              homepage.
            </Link>
          </p>
        </div>
      </Section.Content>
    </Section>
  );
}
