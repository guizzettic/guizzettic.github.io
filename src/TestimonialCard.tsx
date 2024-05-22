import { IndividualCard } from "./App";

interface TestimonialCardProps {
  user: IndividualCard;
}
// ring-opacity-100 border ring-0 ring-white
const TestimonialCard: React.FC<TestimonialCardProps> = ({ user }) => {
  return (
    <div className="flex h-[233px] w-[343px] flex-col items-start justify-around rounded-lg bg-white px-6 py-4 ring-2 ring-white ring-opacity-100">
      <div className="flex gap-3">
        <img
          src={user.avatar}
          alt={`${user.user}'s avatar`}
          className="size-12"
        />
        <div>
          <h3 className="text-xl font-semibold tracking-wide text-neutral-900">
            {user.user}
          </h3>
          <p className="text-sm text-neutral-600">{user.accountName}</p>
        </div>
      </div>
      <p className="tracking-wide text-neutral-600">{user.message}</p>
    </div>
  );
};

export default TestimonialCard;
