export type Category =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools";

export type Difficulty = "Beginner-Friendly" | "Intermediate" | "Advanced";

// The set of colors a badge is allowed to be. Keeping this as a fixed
// list (instead of just "string") means the JSON data can only use
// colors we've actually styled — a typo like "blu" would be caught
// by TypeScript instead of silently rendering with no color.
export type BadgeColor =
  | "blue"
  | "green"
  | "orange"
  | "red"
  | "yellow"
  | "purple"
  | "gray";

export interface Technology {
  id: string;
  name: string;
  category: Category;
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty;
  badge: string;
  badgeColor: BadgeColor;
}
