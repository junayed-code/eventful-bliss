import { useLoaderData } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import EventCard from "../components/EventCard";

export default function Events() {
  const events = useLoaderData();

  return (
    <Container.Main>
      <Section className="py-12 md:py-16">
        <Container>
          <Section.Content className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5  gap-y-7 justify-items-center mt-12">
            {events.map(_event => (
              <EventCard key={_event.id} event={_event} />
            ))}
          </Section.Content>
        </Container>
      </Section>
    </Container.Main>
  );
}
