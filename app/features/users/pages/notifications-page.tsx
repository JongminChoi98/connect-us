import { NotificationCard } from "../components/notification-card";
import { Route } from "./+types/notifications-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Notifications | connectus" }];
};

export default function NotificationsPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-4xl font-bold">Notifications</h1>
      <div className="flex flex-col items-start gap-5">
        <NotificationCard
          avatarUrl="https://github.com/JongminChoi98.png"
          avatarFallback="S"
          userName="Steve Jobs"
          message=" followed you."
          timestamp="2 days ago"
          seen={false}
        />
      </div>
    </div>
  );
}
