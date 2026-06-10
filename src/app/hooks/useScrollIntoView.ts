import { useCallback } from "react";

/**
 * Hook that provides a handler to scroll an element into view when focused
 * Useful for form fields, especially on mobile where keyboards can obscure inputs
 */
export function useScrollIntoView() {
  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setTimeout(() => {
        e.target.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }, 100);
    },
    []
  );

  return handleFocus;
}
