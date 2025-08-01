import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Publish", "Archived"] as const;

export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "It & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { error: "Title must be at least 3 characters long" })
    .max(100, { error: "Title must be at most 100 characters long..." }),
  description: z
    .string()
    .min(3, { error: "description must be at least 3 characters long" }),
  fileKey: z.string().min(1, { error: "File is required" }),
  price: z.number().min(1, { error: "Price must be a positive number" }),
  duration: z
    .number()
    .min(1, { error: "Duration must be at least 1 hour" })
    .max(500, { error: "Duration must be at most 500 hours" }),
  level: z.enum(courseLevels, { error: "Level is required" }),
  category: z.enum(courseCategories, { error: "Category is required." }),
  smallDescription: z
    .string()
    .min(3, { error: "Small description must be at least 3 characters long" })
    .max(200, {
      error: "Small description must be at most 200 characters long...",
    }),

  slug: z.string().min(3, { error: "Slug must be at least 3 characters long" }),

  status: z.enum(courseStatus, { error: "Status is required" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
