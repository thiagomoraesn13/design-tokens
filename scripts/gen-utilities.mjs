import fs from "node:fs";
import path from "node:path";

import { colorTokens } from "../dist-tmp/tokens/colors-tokens.js";

const tokenNames = Object.keys(colorTokens);

// gera regras bem compactas (gzip adora)
const rules = tokenNames
  .flatMap((n) => [
    `.bg-${n}{background-color:var(--color-${n})}`,
    `.text-${n}{color:var(--color-${n})}`,
    `.border-${n}{border-color:var(--color-${n})}`,
  ])
  .join("");

const out = `/* AUTO-GENERATED. DO NOT EDIT. */
@layer utilities{${rules}}
`;

const distDir = path.resolve("dist");
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "utilities.css"), out, "utf8");

console.log(
  `Generated dist/utilities.css with ${tokenNames.length * 3} utilities`,
);
