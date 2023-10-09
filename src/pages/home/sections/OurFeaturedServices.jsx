import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import FrostedGlassBg from "../../../components/FrostedGlassBg";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

export default function OurFeaturedServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/__data/services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <FrostedGlassBg className="bg-frosted">
      <Section className="py-12 md:py-20">
        <Container className="max-w-7xl">
          <Section.Title>Our Featured Services</Section.Title>
          <Section.Description>
            We guarantee your social event will be a success with our
            creativity, attention to detail, and passion for planning. Our team
            aligns the event with your brand and understands your mission,
            goals, and vision.
          </Section.Description>
          <Section.Content className="grid lg:grid-cols-2 gap-6 justify-items-center mt-12">
            {services.slice(0, 6).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </Section.Content>
          <Section.Content className="mt-8 text-center">
            <Button className="btn-accent text-lg">SEE ALL SERVICES</Button>
          </Section.Content>
        </Container>
      </Section>
    </FrostedGlassBg>
  );
}

function ServiceCard({ service = {} }) {
  const { name: title, image, description, price } = service;

  return (
    <Card className="max-w-2xl sm:card-side w-full bg-white shadow-xl hover:scale-105 duration-200">
      <Card.Image className="sm:basis-2/5">
        <img
          className="w-full aspect-video sm:aspect-square object-cover h-full"
          src={image}
          alt={title}
        />
      </Card.Image>
      <Card.Body className="p-5 sm:basis-3/5">
        <Card.Title className="text-2xl">{title}</Card.Title>
        <Card.Text className="flex-none">{description}</Card.Text>
        <Card.Text className="text-xl font-bold text-rose-600/70">
          ${price}
        </Card.Text>
        <Card.Box className="card-actions justify-end">
          <Button className="btn-primary text-lg w-36">Details</Button>
        </Card.Box>
      </Card.Body>
    </Card>
  );
}
