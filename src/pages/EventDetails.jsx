import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import { BsCalendar4Event } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import moment from "moment";

export async function eventDetailsLoader({ params }) {
  const { id } = params;
  const res = await fetch("/__data/events.json");
  const events = await res.json();
  const event = events?.find(event => event.id == id);

  if (!event) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return event;
}

export default function EventDetails() {
  const { title, image, eventDate, location, eventInformation } =
    useLoaderData();

  return (
    <Section className="py-10 bg-secondary/5">
      <Container>
        <Card className="max-w-3xl mx-auto bg-base-100">
          <Card.Image className="rounded-md relative">
            <img
              className="w-full aspect-video object-cover"
              src={image}
              alt={title}
            />
            <figcaption className="absolute inset-0 bg-neutral/60 text-base-100 px-6 py-4 flex items-end">
              <Card.Box>
                <Card.Title className="text-2xl md:text-3xl font-bold mb-4">
                  {title}
                </Card.Title>
                <Card.Text className="flex items-center space-x-2">
                  <BsCalendar4Event />
                  <span>{moment(eventDate).format("D MMMM, YYYY")}</span>
                </Card.Text>
                <Card.Text className="flex items-center space-x-2">
                  <FaLocationDot />
                  <span>{location}</span>
                </Card.Text>
              </Card.Box>
            </figcaption>
          </Card.Image>

          <Card.Body>
            <Card.Title className="md:text-2xl">Event Information</Card.Title>
            <Card.Text className="md:text-lg">{eventInformation}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Section>
  );
}
