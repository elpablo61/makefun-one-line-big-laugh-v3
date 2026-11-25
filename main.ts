// One Line, Big Laugh — v3 (replacement entry; R2 #62/2,582)
// Writes a single 107-character line to /output/entry.txt.
import * as fs from "node:fs";

const line =
  "I put my phone on silent for a funeral. It vibrated once. It was my mother, texting, 'Are you ignoring me?'";

// The gate accepts 1–200 characters only; refuse to write an invalid entry.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line is ${line.length} characters, outside the 1-200 gate`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
