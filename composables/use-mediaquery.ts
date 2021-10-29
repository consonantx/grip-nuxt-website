import { useNuxtApp } from 'nuxt3'

const nuxt = useNuxtApp()

export const defaultWindow = /* #__PURE__ */ nuxt ? window : undefined;

/**
 * Reactive Media Query.
 *
 * @see https://vueuse.org/useMediaQuery
 * @param query
 * @param options
 */
export function useMediaQuery(
  query: string,
  options: {
    window?: Window;
  } = {}
) {
  const { window = defaultWindow } = options;
  if (!window) return ref(false);

  const mediaQuery = window.matchMedia(query);
  const matches = ref(mediaQuery.matches);

  const handler = (event: MediaQueryListEvent) => {
    matches.value = event.matches;
  };

  if ("addEventListener" in mediaQuery)
    mediaQuery.addEventListener("change", handler);
  else mediaQuery.addListener(handler);

  if ("removeEventListener" in mediaQuery)
    mediaQuery.removeEventListener("change", handler);
  else mediaQuery.removeListener(handler);

  return matches;
}
