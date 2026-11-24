// make.fun news-image-20261124 — deterministic entry copier.
// Authored in-session by the build agent. Node standard library only, no network.
// The image beside this file (entry.png) is the finished entry; this program
// places those exact bytes where the grader reads them.

import { mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Absolute directory holding this script ("here" = repo root in the grader).
const here = dirname(fileURLToPath(import.meta.url));

// The grader passes MAKEFUN_OUTPUT_DIR (otherwise the default /output).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Guarantee the destination exists, then copy the source image byte for byte.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
