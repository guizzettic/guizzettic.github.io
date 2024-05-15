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
          <h3 className="user-name">{card.user}</h3>
          <p className="account-name">{card.accountName}</p>
        </div>
      </div>
      <p className="message">{card.message}</p>
    </div>
  );
};

export default TestimonialCard;
