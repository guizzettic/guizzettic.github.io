import { IndividualCard } from "./App";
import "./App.css";

interface TestimonialCardProps {
  card: IndividualCard;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ card }) => {
  return (
    <div className="testimonial-card">
      <div className="user-info">
        <img
          src={card.avatar}
          alt={`${card.user}'s avatar`}
          className="avatar"
        />
        <div>
          <p className="user-name">{card.user}</p>
          <p className="account-name">{card.accountName}</p>
        </div>
      </div>
      <p className="message">{card.message}</p>
    </div>
  );
};

export default TestimonialCard;
