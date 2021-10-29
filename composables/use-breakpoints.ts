import { useNuxtApp } from 'nuxt3'
import { defaultWindow, useMediaQuery } from './use-mediaquery';

const nuxt = useNuxtApp()

export const breakpointsTailwind = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 * Increase string a value with unit
 *
 * @example '2px' + 1 = '3px'
 * @example '15em' + (-2) = '13em'
 */
function increaseWithUnit(target: number, delta: number): number
function increaseWithUnit(target: string, delta: number): string
function increaseWithUnit(target: string | number, delta: number): string | number
function increaseWithUnit(target: string | number, delta: number): string | number {
  if (typeof target === 'number')
    return target + delta
  const value = target.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || ''
  const unit = target.slice(value.length)
  const result = (parseFloat(value) + delta)
  if (Number.isNaN(result))
    return target
  return result + unit
}

export type Breakpoints<K extends string = string> = Record<K, number | string>;

/**
 * Reactively viewport breakpoints
 *
 * @see https://vueuse.org/useBreakpoints
 * @param options
 */
export function useBreakpoints<K extends string>(
  breakpoints: Breakpoints<K>,
  options: {
    window?: Window
  } = {}
) {
  function getValue(k: K, delta?: number) {
    let v = breakpoints[k];

    if (delta != null) v = increaseWithUnit(v, delta);

    if (typeof v === "number") v = `${v}px`;

    return v;
  }

  const { window = defaultWindow } = options;

  function match(query: string): boolean {
    if (!window) return false;
    return window.matchMedia(query).matches;
  }

  return {
    greater(k: K) {
      return useMediaQuery(`(min-width: ${getValue(k)})`, options);
    },
    smaller(k: K) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a: K, b: K) {
      return useMediaQuery(
        `(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`,
        options
      );
    },
    isGreater(k: K) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k: K) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a: K, b: K) {
      return match(
        `(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`
      );
    },
  };
}

export type UseBreakpointsReturn = ReturnType<typeof useBreakpoints>;