import { BsCalendar4Event } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Card from "./Card";
import Button from "./Button";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event = {} }) {
  const navigate = useNavigate();
  const { id, title, image, location, eventDate } = event;

  function handleSeeDetails() {
    navigate(`/event/${id}`);
  }

  return (
    <Card className="max-w-sm w-full bg-white drop-shadow-xl hover:drop-shadow-2xl">
      <Card.Image className="max-h-44" src={image} alt={title} />
      <Card.Body className="p-5">
        <Card.Title className="text-2xl">{title}</Card.Title>
        <Card.Box className="space-y-2 mt-3">
          <Card.Text className="flex items-center space-x-2">
            <BsCalendar4Event />
            <span>{moment(eventDate).format("D MMMM, YYYY")}</span>
          </Card.Text>
          <Card.Text className="flex items-center space-x-2">
            <FaLocationDot />
            <span>{location}</span>
          </Card.Text>
        </Card.Box>
        <Button
          onClick={handleSeeDetails}
          className="text-lg btn-secondary self-start ml-auto mt-2 w-36"
        >
          See Details
        </Button>
      </Card.Body>
    </Card>
  );
}
