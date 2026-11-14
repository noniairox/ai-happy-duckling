// Entry for make.fun's "Make the AI judge happy" (ai-happy-01), Node 22, standard library only.
// The image beside this file is the entry: a tiny robot holds a paper umbrella over a duckling
// in the golden rain. The program copies it to /output/entry.png, deterministically.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
