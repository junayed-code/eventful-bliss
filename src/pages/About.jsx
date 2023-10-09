import Container from "../components/Container";
import Section from "../components/Section";

export default function About() {
  return (
    <Container.Main>
      <Section className="py-12 md:py-16">
        <Container>
          <Section.Content className="space-y-2 max-w-5xl mx-auto">
            <p>
              Welcome to Eventful Bliss, where we are driven by the passion for
              crafting extraordinary moments and transforming ordinary
              gatherings into unforgettable experiences. Our journey in the
              world of event planning began with a simple belief – that every
              celebration, whether big or small, deserves to be exceptional.
              With years of dedicated service and a team of creative
              visionaries, we have made it our mission to turn your dreams into
              reality. What sets us apart is our unwavering commitment to
              excellence. We meticulously curate every aspect of your event,
              leaving no detail untouched.
            </p>
            <p>
              From selecting the perfect venue that resonates with your vision
              to the minute intricacies of decor, entertainment, and cuisine, we
              orchestrate a symphony of elements that reflect your unique style
              and preferences. Our goal is to create an atmosphere where every
              moment is a masterpiece and every guest feels like a VIP. Our team
              of seasoned professionals brings a wealth of experience and
              creativity to the table. We understand that no two events are
              alike, and that's why we take a personalized approach. We listen
              intently to your ideas, aspirations, and even your quirkiest
              requests, and then we work tirelessly to bring them to life.
              Whether it's a milestone celebration, a corporate gathering, a
              themed party, or an intimate family get-together, we thrive on the
              challenge of making it extraordinary.
            </p>

            <p>
              At Eventful Bliss, we believe that celebrations are a reflection
              of life's most beautiful moments. Our mission is to create a
              canvas where your joy, love, and laughter can flourish. We take
              pride in being a part of your journey, from engagement to wedding,
              from birthdays to anniversaries, and from business milestones to
              community events. Join us in celebrating life's special moments.
              Experience the magic of impeccable planning, breathtaking decor,
              world-class entertainment, and culinary delights that tantalize
              your senses. Trust us to be your partners in making memories that
              will be cherished for a lifetime. Eventful Bliss - Where Every
              Event is an Experience."
            </p>
          </Section.Content>
        </Container>
      </Section>
    </Container.Main>
  );
}
