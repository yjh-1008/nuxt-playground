export {};

declare global {
  type Mayve<T> = T | null | undefined;
};