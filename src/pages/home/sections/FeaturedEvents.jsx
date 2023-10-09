import { useEffect, useState } from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import moment from "moment/moment";

export default function FeaturedEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/__data/events.json")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <Section className="bg-secondary bg-opacity-5 py-12 md:py-20">
      <Container className="max-w-7xl">
        <Section.Title>Featured Events</Section.Title>
        <Section.Description>
          Eventful Bliss can assist you in simplifying the process and achieving
          a successful event no matter where you are in the world.
        </Section.Description>
        <Section.Content className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5  gap-y-7 justify-items-center mt-12">
          {events.slice(0, 6).map(_event => (
            <EventCard
              key={_event.id}
              title={_event.title}
              image={_event.image}
              location={_event.location}
              date={moment(_event.eventDate).format("D MMMM, YYYY")}
            />
          ))}
        </Section.Content>
        <Section.Content className="mt-8 text-center">
          <Button className="btn-accent text-lg">SEE ALL EVENTS</Button>
        </Section.Content>
      </Container>
    </Section>
  );
}

function EventCard({ title, image, location, date }) {
  return (
    <Card className="max-w-sm w-full bg-white drop-shadow-xl hover:drop-shadow-2xl">
      <Card.Image className="max-h-44" src={image} alt={title} />
      <Card.Body className="p-5">
        <Card.Title className="text-2xl">{title}</Card.Title>
        <Card.Box className="space-y-2 mt-3">
          <Card.Text className="flex items-center space-x-2">
            <BsCalendar4Event />
            <span>{date}</span>
          </Card.Text>
          <Card.Text className="flex items-center space-x-2">
            <FaLocationDot />
            <span>{location}</span>
          </Card.Text>
        </Card.Box>
        <Button className="text-lg btn-secondary self-start ml-auto mt-2 w-36">
          See Details
        </Button>
      </Card.Body>
    </Card>
  );
}
