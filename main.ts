// The Battery's Last Text to Its Charger
// make.fun competition: u-alven-the-battery-s-last-text-to-its-charger-4278cfab
//
// Writes one line of plain text (1-200 characters) to /output/entry.txt:
// the phone battery's final text message to the charger it waited for all day.
//
// The line is fixed and deterministic: the same text is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I waited by the outlet all day like an idiot, and you left me on read. " +
  "So I spent the afternoon with the power bank \u2014 20,000 mAh, charges " +
  "fast, and unlike you, he actually texts back.";

const OUTPUT_PATH = "/output/entry.txt";

// Guard the gate: one line, plain UTF-8 text, 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
