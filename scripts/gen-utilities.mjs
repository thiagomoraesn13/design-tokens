import fs from "node:fs";
import path from "node:path";

// ✅ Coloque aqui a MESMA lista que você usa pros tokens
const colorTokens = {
  "base-lt": true,
  "base-dk": true,
  "neutral-lt-3": true,
  "neutral-lt-2": true,
  "neutral-lt-1": true,
  neutral: true,
  "neutral-dk-1": true,
  "neutral-dk-2": true,
  "neutral-dk-3": true,
  "brand-lt-2": true,
  "brand-lt-1": true,
  brand: true,
  "brand-dk-1": true,
  "brand-dk-2": true,
  "brand-dk-3": true,
  "error-lt": true,
  error: true,
  "success-lt": true,
  success: true,
  "bg-lt-2": true,
  "bg-lt-1": true,
  bg: true,
  "esp-a-lt-1": true,
  "esp-a": true,
  "esp-a-dk-1": true,
  "esp-b-lt-1": true,
  "esp-b": true,
  "esp-c-lt-2": true,
  "esp-c-lt-1": true,
  "esp-c": true,
  "esp-d-lt-1": true,
  "esp-d": true,
  "esp-e-lt-1": true,
  "esp-e": true,
  "gradient-start": true,
  "gradient-end": true,
};

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
