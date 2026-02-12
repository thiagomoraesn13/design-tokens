import type { ColorToken } from "./colors-tokens";

export const text = (c: ColorToken) => `text-${c}` as const;
export const border = (c: ColorToken) => `border-${c}` as const;
export const ring = (c: ColorToken) => `ring-${c}` as const;

type Breakpoint = "sm" | "md" | "lg" | "xl";

type TextToken =
  | "mini"
  | "small"
  | "body"
  | "h1-mobile"
  | "h3"
  | "h2"
  | "h1"
  | "display";

export const typography = {
  size(token: TextToken, bp?: Breakpoint) {
    const base = `text-[length:var(--text-${token})]`;
    if (!bp) return base;
    switch (bp) {
      case "sm":
        return `sm:${base}`;
      case "md":
        return `md:${base}`;
      case "lg":
        return `lg:${base}`;
      case "xl":
        return `xl:${base}`;
    }
  },
};

export function bg(token: ColorToken) {
  return `bg-[color:var(--color-${token})]`;
}

export function textColor(token: ColorToken) {
  return `text-[color:var(--color-${token})]`;
}
