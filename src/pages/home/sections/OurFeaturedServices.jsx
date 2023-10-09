import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import FrostedGlassBg from "../../../components/FrostedGlassBg";
import ServiceCard from "../../../components/ServiceCard";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import ASOFade from "../../../aos";

export default function OurFeaturedServices() {
  const services = useFetch("/__data/services.json");

  return (
    <FrostedGlassBg className="bg-frosted">
      <Section className="py-12 md:py-20">
        <Container className="max-w-7xl">
          <ASOFade fade="up" duration="800" delay="0">
            <Section.Title>Our Featured Services</Section.Title>
            <Section.Description>
              We guarantee your social event will be a success with our
              creativity, attention to detail, and passion for planning. Our
              team aligns the event with your brand and understands your
              mission, goals, and vision.
            </Section.Description>
            <Section.Content className="grid lg:grid-cols-2 gap-6 justify-items-center mt-12">
              {services.slice(0, 6).map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </Section.Content>
            <Section.Content className="mt-8 text-center">
              <Link
                to="/services"
                className="btn rounded-md btn-accent text-lg"
              >
                SEE ALL SERVICES
              </Link>
            </Section.Content>
          </ASOFade>
        </Container>
      </Section>
    </FrostedGlassBg>
  );
}
