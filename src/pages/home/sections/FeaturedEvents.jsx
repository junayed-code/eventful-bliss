import Container from "../../../components/Container";
import Section from "../../../components/Section";
import EventCard from "../../../components/EventCard";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import ASOFade from "../../../aos";

export default function FeaturedEvents() {
  const events = useFetch("/__data/events.json");

  return (
    <Section className="bg-secondary bg-opacity-5 py-12 md:py-20">
      <Container className="max-w-7xl">
        <ASOFade fade="up" delay="0" duration="800">
          <Section.Title>Featured Events</Section.Title>
          <Section.Description>
            Eventful Bliss can assist you in simplifying the process and
            achieving a successful event no matter where you are in the world.
          </Section.Description>
          <Section.Content className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5  gap-y-7 justify-items-center mt-12">
            {events.slice(0, 6).map(_event => (
              <EventCard key={_event.id} event={_event} />
            ))}
          </Section.Content>
          <Section.Content className="mt-8 text-center">
            <Link to="/events" className="btn rounded-md btn-accent text-lg">
              SEE ALL EVENTS
            </Link>
          </Section.Content>
        </ASOFade>
      </Container>
    </Section>
  );
}
