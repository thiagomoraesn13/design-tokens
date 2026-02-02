export const colorTokens = {
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
} as const;

export type ColorToken = keyof typeof colorTokens;

// helpers de classe
export const bg = (c: ColorToken) => `bg-${c}` as const;
export const text = (c: ColorToken) => `text-${c}` as const;
export const border = (c: ColorToken) => `border-${c}` as const;
export const ring = (c: ColorToken) => `ring-${c}` as const;
