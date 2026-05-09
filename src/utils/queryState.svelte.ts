export function createQueryState(
  key: string,
  defaultValue: string | null = null,
) {
  // 1. Initialize from URL if present, otherwise use fallback
  const getInitialValue = () => {
    if (typeof window === "undefined") return defaultValue;
    const params = new URLSearchParams(window.location.search);
    return params.get(key) ?? defaultValue;
  };

  let internalValue = $state(getInitialValue());

  // 2. Sync state changes back to the URL
  $effect(() => {
    const url = new URL(window.location.href);
    if (internalValue) {
      url.searchParams.set(key, internalValue);
    } else {
      url.searchParams.delete(key);
    }

    // update the URL without refreshing the page
    window.history.replaceState({}, "", url);
  });

  // 3. Listen for browser back/forward buttons (popstate)
  $effect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      internalValue = params.get(key) ?? defaultValue;
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  });

  return {
    get value() {
      return internalValue;
    },
    set value(v) {
      internalValue = v;
    },
  };
}
