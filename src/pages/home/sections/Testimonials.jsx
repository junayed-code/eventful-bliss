import { useState, useEffect } from "react";
import Card from "../../../components/Card";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useFetch from "../../../hooks/useFetch";

export default function Testimonials() {
  const testimonials = useFetch("/__data/testimonials.json");

  return (
    <Section className="py-12 md:py-20 bg-secondary/5">
      <Container className="max-w-7xl">
        <Section.Title>Listen to our clients</Section.Title>
        <Section.Content className="mt-10">
          <Carousel
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            centerMode={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch={true}
            stopOnHover={false}
            selectedItem={0}
            centerSlidePercentage={100}
          >
            {testimonials.map(tes => (
              <Testimonial
                key={tes.id}
                quote={tes.quote}
                userName={tes.userName}
              />
            ))}
          </Carousel>
        </Section.Content>
      </Container>
    </Section>
  );
}

function Testimonial({ quote, userName }) {
  return (
    <Card className="max-w-3xl mx-auto bg-secondary/5 drop-shadow-2xl">
      <Card.Body className="text-center items-center max-w-xl mx-auto">
        <Card.Text className="text-lg">
          "<em>{quote}</em>"
        </Card.Text>
        <Card.Title>{userName}</Card.Title>
      </Card.Body>
    </Card>
  );
}
