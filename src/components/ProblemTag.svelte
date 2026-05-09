<script lang="ts">
  import type { TagString } from "../content.config";
  import Tag, { type TagProps } from "./Tag.svelte";

  const propsMap: Record<TagString, TagProps> = {
    gamification: { title: "Game", icon: "puzzle", color: "orange-inverted" },
    "adaptive-learning": {
      title: "Adaptive Learning",
      icon: "signal",
      color: "purple",
    },
    assessment: {
      title: "Assessment",
      icon: "clipboard-document",
      color: "gray",
    },
    "logistics-and-workflow": {
      title: "Logistics & Workflow",
      icon: "inbox-stack",
      color: "teal-inverted",
    },
    "ai-integrity": {
      title: "AI Integrity",
      icon: "hand-raised",
      color: "purple-inverted",
    },
    "worksheet-generator": {
      title: "Worksheet Generator",
      icon: "document",
      color: "sky-inverted",
    },
    vocabulary: { title: "Vocabulary", icon: "chat-bubble", color: "lime" },
    "special-ed": {
      title: "Special Ed",
      icon: "lifebouy",
      color: "red-inverted",
    },
    ell: { title: "ELL", icon: "language", color: "red" },
    "behavior-tracking": {
      title: "Behavior Tracking",
      icon: "person-plus",
      color: "blue",
    },
    "social-emotional": {
      title: "Social/Emotional",
      icon: "face-smile",
      color: "yellow",
    },
    accessibility: {
      title: "Accessibility",
      icon: "heart",
      color: "pink-inverted",
    },
    "parent-communication": {
      title: "Parent Communication",
      icon: "envelope",
      color: "brown",
    },
    scheduling: { title: "Scheduling", icon: "calendar", color: "orange" },
    "classroom-management": {
      title: "Classroom Management",
      icon: "star",
      color: "yellow-inverted",
    },
    "data-tracking": { title: "Data Tracking", icon: "chart", color: "green" },
    math: { title: "Math", icon: "calculator", color: "blue-inverted" },
    "reading-phonics": {
      title: "Reading & Phonics",
      icon: "book",
      color: "cyan-inverted",
    },
    "music-arts": { title: "Music & Arts", icon: "paint-brush", color: "pink" },
    "science-simulation": {
      title: "Science & Simulation",
      icon: "beaker",
      color: "green-inverted",
    },
    "social-studies": {
      title: "Social Studies",
      icon: "balance",
      color: "brown-inverted",
    },
    "language-learning": {
      title: "Language Learning",
      icon: "language",
      color: "cyan",
    },
    "classroom-library": { title: "Classroom Library", icon: "library" },
    "chromebook-compatible": {
      title: "Chromebook Compatible",
      icon: "laptop",
      color: "gray-inverted",
    },
  };

  interface Props {
    tag: TagString;
    showText?: boolean;
  }

  const { tag, showText = false }: Props = $props();
</script>

<Tag {...propsMap[tag]} {showText} />
