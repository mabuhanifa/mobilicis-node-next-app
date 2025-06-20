// app/lib/useIntersectionObserver.ts
import { RefObject, useEffect, useState } from "react";

/**
 * Custom hook to observe an element's intersection with the viewport.
 * @param ref A React RefObject pointing to the DOM element to observe.
 * @param options IntersectionObserverInit options (e.g., threshold, root, rootMargin).
 * @returns A boolean indicating if the observed element is currently intersecting.
 */
function useIntersectionObserver<T extends HTMLElement>( // Generic type T extends HTMLElement
  ref: RefObject<T | null>, // Crucial: RefObject can hold T or null
  options: IntersectionObserverInit = {} // Default empty options if none provided
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = ref.current; // Get the current element from the ref

    if (currentElement) {
      // Only observe if the element exists
      observer.observe(currentElement);
    }

    // Cleanup function
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Stop observing when component unmounts or dependencies change
      }
      observer.disconnect(); // Disconnect observer
    };
  }, [ref, options]); // Dependencies array for useEffect

  return isVisible;
}

export default useIntersectionObserver;
