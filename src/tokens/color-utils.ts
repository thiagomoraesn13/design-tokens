import type { ColorToken } from "./colors-tokens";

export const text = (c: ColorToken) => `text-${c}` as const;
export const border = (c: ColorToken) => `border-${c}` as const;
export const ring = (c: ColorToken) => `ring-${c}` as const;

export function bg(token: ColorToken) {
  return `bg-[color:var(--color-${token})]`;
}

export function textColor(token: ColorToken) {
  return `text-${token}`;
}

export const TYPO = {
  display: "typography-display",
  h1: "typography-h1",
  h2: "typography-h2",
  h3: "typography-h3",
  body: "typography-body",
  small: "typography-small",
  mini: "typography-mini",
} as const;

export type TypographyToken = keyof typeof TYPO;

export function typography(t: TypographyToken) {
  return TYPO[t];
}
