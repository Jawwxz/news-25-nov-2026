// news-25-nov-2026 — main.ts
//
// Entry for "Sum up 25 November's world news in one image" (make.fun).
// Copies the 1024x1024 newspaper front page (entry.png) — six panels
// summing up 25 November 2026 world news, date stated clearly — to
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output). Deterministic:
// no network, no subprocess, no randomness, so two runs produce
// byte-identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(process.cwd(), "entry.png"), join(outDir, "entry.png"));
