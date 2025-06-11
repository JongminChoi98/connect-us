import { PostCard } from "~/features/community/components/post-card";
import { Route } from "./+types/profile-posts-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Posts | connectus" }];
};

export default function ProfilePostsPage({ params }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <PostCard
          key={`postId-${index}`}
          id={`postId-${index}`}
          title="What is the best productivity tool?"
          author="Joey"
          authorAvatarUrl="https://github.com/apple.png"
          category="Productivity"
          postedAt="12 hours ago"
          expanded
        />
      ))}
    </div>
  );
}
