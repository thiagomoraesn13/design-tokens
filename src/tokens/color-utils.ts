import type { ColorToken } from "./colors-tokens";

export const bg = (c: ColorToken) => `bg-${c}` as const;
export const text = (c: ColorToken) => `text-${c}` as const;
export const border = (c: ColorToken) => `border-${c}` as const;
export const ring = (c: ColorToken) => `ring-${c}` as const;
