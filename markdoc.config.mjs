import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    submission: {
      render: component("./src/components/Submission.astro"),
    },
    "submission-part": {
      render: component("./src/components/SubmissionPart.astro"),
      attributes: {
        type: { type: String },
      },
    },
  },
});
