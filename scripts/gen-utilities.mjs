import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

import { colorTokens } from "../dist-tmp/tokens/colors-tokens.js";

function sha256(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

const tokenNames = Object.keys(colorTokens);

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
const outFile = path.join(distDir, "utilities.css");
const metaFile = path.join(distDir, "utilities.css.sha256");

fs.mkdirSync(distDir, { recursive: true });

const nextHash = sha256(out);
const prevHash = fs.existsSync(metaFile)
  ? fs.readFileSync(metaFile, "utf8").trim()
  : null;

// caminho rápido: hash igual => não faz nada
if (prevHash === nextHash && fs.existsSync(outFile)) {
  console.log(`Skipped (no changes). utilities.css already up-to-date.`);
  process.exit(0);
}

// fallback: se não tem meta, compara conteúdo existente
if (!prevHash && fs.existsSync(outFile)) {
  const current = fs.readFileSync(outFile, "utf8");
  if (sha256(current) === nextHash) {
    fs.writeFileSync(metaFile, nextHash, "utf8");
    console.log(`Skipped (no changes). utilities.css already up-to-date.`);
    process.exit(0);
  }
}

fs.writeFileSync(outFile, out, "utf8");
fs.writeFileSync(metaFile, nextHash, "utf8");

console.log(
  `Generated dist/utilities.css with ${tokenNames.length * 3} utilities`,
);
