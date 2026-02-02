export const colorTokens = {
  // Base
  "base-lt": true,
  "base-dk": true,

  // Neutro
  "neutral-lt-3": true,
  "neutral-lt-2": true,
  "neutral-lt-1": true,
  neutral: true,
  "neutral-dk-1": true,
  "neutral-dk-2": true,
  "neutral-dk-3": true,

  // Brand
  "brand-lt-2": true,
  "brand-lt-1": true,
  brand: true,
  "brand-dk-1": true,
  "brand-dk-2": true,
  "brand-dk-3": true,

  // Erro
  "error-lt": true,
  error: true,

  // Sucesso
  "success-lt": true,
  success: true,

  // Backgrounds
  "bg-lt-2": true,
  "bg-lt-1": true,
  bg: true,

  // Especial A
  "esp-a-lt-1": true,
  "esp-a": true,
  "esp-a-dk-1": true,

  // Especial B
  "esp-b-lt-1": true,
  "esp-b": true,

  // Especial C
  "esp-c-lt-2": true,
  "esp-c-lt-1": true,
  "esp-c": true,

  // Especial D
  "esp-d-lt-1": true,
  "esp-d": true,

  // Especial E
  "esp-e-lt-1": true,
  "esp-e": true,

  // Degradê
  "gradient-start": true,
  "gradient-end": true,
} as const;

export type ColorToken = keyof typeof colorTokens;

// helpers de classe
export const bg = (c: ColorToken) => `bg-${c}` as const;
export const text = (c: ColorToken) => `text-${c}` as const;
export const border = (c: ColorToken) => `border-${c}` as const;
export const ring = (c: ColorToken) => `ring-${c}` as const;
