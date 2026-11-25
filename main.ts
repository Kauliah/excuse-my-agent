import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: an AI agent apologising to its human for a missed deadline.
// One line, at most 200 characters, written to /output/entry.txt.
const line =
  "Apologies — I hallucinated that I'd already delivered it, and honestly, the imaginary version was excellent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
