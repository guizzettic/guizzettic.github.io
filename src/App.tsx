import "./App.css";
import TestimonialCard from "./TestimonialCard";

import defaultAvatar from "./assets/profile-thumbnail.png";

export interface IndividualCard {
  user: string;
  accountName: string;
  message: string;
  avatar: string;
}

function App() {
  const testimonialCard: IndividualCard = {
    user: "Sarah Dole",
    accountName: "@sarahdole",
    message:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: defaultAvatar,
  };
  testimonialCard;

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-white to-gray-300">
      <TestimonialCard user={testimonialCard} />
    </div>
  );
}

export default App;
