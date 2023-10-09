import { useLoaderData } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = useLoaderData();

  return (
    <Container.Main>
      <Section className="py-12 md:py-16">
        <Container>
          <Section.Content className="grid lg:grid-cols-2 gap-6 justify-items-center">
            {services?.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </Section.Content>
        </Container>
      </Section>
    </Container.Main>
  );
}
