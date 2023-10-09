import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";

export default function ServiceCard({ service = {} }) {
  const navigate = useNavigate();
  const { id, name: title, image, description, price } = service;

  function handleSeeDetails() {
    navigate(`/service/${id}`);
  }

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
          <Button
            onClick={handleSeeDetails}
            className="btn-primary text-lg w-36"
          >
            Details
          </Button>
        </Card.Box>
      </Card.Body>
    </Card>
  );
}
