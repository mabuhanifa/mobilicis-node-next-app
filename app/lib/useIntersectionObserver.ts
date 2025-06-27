// app/lib/useIntersectionObserver.ts
import { RefObject, useEffect, useState } from "react";

/**
 * Custom hook to observe an element's intersection with the viewport.
 * @param ref A React RefObject pointing to the DOM element to observe.
 * @param options IntersectionObserverInit options (e.g., threshold, root, rootMargin).
 * @returns A boolean indicating if the observed element is currently intersecting.
 */
function useIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [ref, options]);
  return isVisible;
}

export default useIntersectionObserver;
