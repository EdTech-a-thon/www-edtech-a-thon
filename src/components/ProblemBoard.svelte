<script lang="ts">
  import type { InferEntrySchema, RenderedContent } from "astro:content";
  import ProblemBoardCard from "./ProblemBoardCard.svelte";
  import { createQueryState } from "../utils/queryState.svelte";
  import type { TagString } from "../content.config";

  interface Props {
    problems: {
      id: string;
      body?: string;
      collection: "problems";
      data: InferEntrySchema<"problems">;
      rendered?: RenderedContent;
      filePath?: string;
    }[];
  }

  const { problems }: Props = $props();

  let selectedTag = createQueryState("tag");

  const filteredProblems = $derived(
    selectedTag.value
      ? problems.filter((problem) =>
          problem.data.tags?.includes(selectedTag.value as TagString),
        )
      : problems,
  );
</script>

<div class="@container">
  <div class="mb-4 flex items-baseline">
    <label for="tag" class="font-medium text-gray-700 mb-2"
      >Filter by Tag:</label
    >
    <select
      id="tag"
      class="ml-2 rounded-md px-2 py-1 bg-white border border-slate-400"
      bind:value={
        () => selectedTag.value ?? "",
        (value) => (selectedTag.value = value || null)
      }
    >
      <option value="">---</option>
      <option value="gamification">Game</option>
      <option value="adaptive-learning">Adaptive Learning</option>
      <option value="assessment">Assessment</option>
      <option value="logistics-and-workflow">Logistics & Workflow</option>
      <option value="ai-integrity">AI Integrity</option>
      <option value="worksheet-generator">Worksheet Generator</option>
      <option value="vocabulary">Vocabulary</option>
      <option value="special-ed">Special Ed</option>
      <option value="ell">ELL</option>
      <option value="behavior-tracking">Behavior Tracking</option>
      <option value="social-emotional">Social/Emotional</option>
      <option value="accessibility">Accessibility</option>
      <option value="parent-communication">Parent Communication</option>
      <option value="scheduling">Scheduling</option>
      <option value="classroom-management">Classroom Management</option>
      <option value="data-tracking">Data Tracking</option>
      <option value="math">Math</option>
      <option value="reading-phonics">Reading & Phonics</option>
      <option value="music-arts">Music & Arts</option>
      <option value="science-simulation">Science & Simulation</option>
      <option value="social-studies">Social Studies</option>
      <option value="language-learning">Language Learning</option>
      <option value="classroom-library">Classroom Library</option>
      <option value="chromebook-compatible">Chromebook Compatible</option>
    </select>
    {#if selectedTag.value}
      <button
        class="cursor-pointer text-sky-700 px-2 hover:underline"
        onclick={() => (selectedTag.value = null)}
      >
        Clear
      </button>
    {/if}

    <div class="ml-auto">
      {filteredProblems.length}
      {filteredProblems.length === 1 ? "problem" : "problems"}
      {filteredProblems.length < problems.length
        ? `(of ${problems.length} total)`
        : null}
    </div>
  </div>
  <div
    class="grid grid-cols-1 @md:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 gap-4"
  >
    {#each filteredProblems as problem}
      <ProblemBoardCard
        slug={problem.id}
        id={problem.data.id}
        title={problem.data.title}
        status={problem.data.status}
        tags={problem.data.tags}
        solutions={problem.data.solutions}
      />
    {/each}
  </div>
  {#if selectedTag.value}
    <div class="mt-12 text-center italic">
      You are only viewing problems with the "{selectedTag.value}" tag.
      <button
        class="cursor-pointer bg-sky-700 text-white text-sm px-2 py-1 rounded hover:bg-sky-800"
        onclick={() => (selectedTag.value = null)}
      >
        See all
      </button>
    </div>
  {/if}
</div>
