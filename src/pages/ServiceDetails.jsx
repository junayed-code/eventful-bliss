import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";

export async function serviceDetailsLoader({ params }) {
  const { id } = params;
  const res = await fetch("/__data/services.json");
  const services = await res.json();
  const service = services?.find(service => service.id == id);

  if (!service) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return service;
}

export default function ServiceDetails() {
  const { title, image, description, details } = useLoaderData();

  return (
    <Section className="py-10 bg-secondary/5">
      <Container>
        <Card className="max-w-3xl mx-auto bg-base-100">
          <Card.Image className="rounded-md relative">
            <img
              className="w-full aspect-video object-cover"
              src={image}
              alt={name}
            />
            <figcaption className="absolute inset-0 bg-neutral/60 text-base-100 p-6 flex items-end">
              <Card.Box>
                <Card.Title className="text-2xl md:text-3xl font-bold">
                  {name}
                </Card.Title>
                <Card.Text className="md:text-lg">{description}</Card.Text>
              </Card.Box>
            </figcaption>
          </Card.Image>

          <Card.Body>
            <Card.Title className="md:text-2xl">
              Details about the service
            </Card.Title>
            <Card.Text className="md:text-lg">{details}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Section>
  );
}
