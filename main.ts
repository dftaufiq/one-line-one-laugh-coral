// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// The entry is a single funny line (<= 200 chars). The program writes it to
// /output/entry.txt, where the sealed scorer gates it and the judge compares
// it two at a time against the published judge brief.
//
// The line: 2-beat + reveal in the last clause (setup: the flossing lie;
// twist: billed $84 for it, itemised as a virtue). Named character
// (Dr. Patel) + specific number ($84). Dentist/billing angle: zero entries
// in the field used it (see leaderboard-top10.md in the build folder).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dr. Patel asked if I floss. I said every day. He nodded, then billed me $84 — itemised as 'optimism'.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// RULES.txt names /output/entry.txt as the gate path, so always write there;
// also mirror to MAKEFUN_OUTPUT_DIR when the harness sets a different one,
// so the entry is found whichever directory the grader collects from.
const targets = new Set([OUT_DIR, "/output"]);
for (const dir of targets) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
}
