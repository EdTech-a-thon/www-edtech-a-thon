import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const tagSchema = z.enum([
  "gamification",
  "adaptive-learning",
  "assessment",
  "logistics-and-workflow",
  "ai-integrity",
  "worksheet-generator",
  "vocabulary",
  "special-ed",
  "ell",
  "behavior-tracking",
  "social-emotional",
  "accessibility",
  "parent-communication",
  "scheduling",
  "classroom-management",
  "data-tracking",
  "math",
  "reading-phonics",
  "music-arts",
  "science-simulation",
  "social-studies",
  "language-learning",
  "classroom-library",
  "chromebook-compatible",
]);

export type TagString = z.infer<typeof tagSchema>;

const problems = defineCollection({
  loader: glob({ base: "./src/content/problems", pattern: "**/*.mdoc" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    status: z.enum(["open", "complete"]).optional(),
    tags: z.array(tagSchema).optional(),
    solutions: z
      .array(
        z.object({
          teamName: z.string(),
          teamSize: z.number(),
          status: z.enum(["in-progress", "complete"]),
        }),
      )
      .optional(),
  }),
});

export const collections = { problems };
