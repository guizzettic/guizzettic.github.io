import "./App.css";
import TestimonialCard from "./TestimonialCard";
import defaultAvatar from "./assets/profile-thumbnail.png";

export interface IndividualCard {
  user: string;
  accountName: string;
  message: string;
  avatar?: string;
}

function App() {
  const testimonialCards: IndividualCard[] = [
    {
      user: "Sarah Dole",
      accountName: "@sarahdole",
      message:
        "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
      avatar: defaultAvatar,
    },
  ];

  return (
    <>
      {testimonialCards.map((card, index) => (
        <TestimonialCard card={card} key={index} />
      ))}
    </>
  );
}

export default App;
