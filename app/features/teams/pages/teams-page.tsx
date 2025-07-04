import { Hero } from "~/common/components/hero";
import { TeamCard } from "../components/team-card";
import { Route } from "./+types/teams-page";

export const meta: Route.MetaFunction = () => [{ title: "Teams | connectus" }];

export default function TeamsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Teams" subtitle="Find a team looking for a new member." />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            id={`teamId-${index}`}
            leaderUsername="Joey"
            leaderAvatarUrl="https://github.com/JongminChoi98.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
