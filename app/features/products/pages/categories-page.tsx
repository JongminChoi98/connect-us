import { CategoryCard } from "~/common/components/category-card";
import { Hero } from "~/common/components/hero";
import { Route } from "./+types/categories-page";

export const meta: Route.MetaFunction = () => [
  { title: "Categories | ProductHunt Clone" },
  { name: "description", content: "Browse products by category" },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <Hero title="Categories" subtitle="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={`categoryId-${index}`}
            id={`categoryId-${index}`}
            name="Category Name"
            description="Category Description"
          />
        ))}
      </div>
    </div>
  );
}
