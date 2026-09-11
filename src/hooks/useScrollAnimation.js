import { useEffect, useRef } from "react";

function useScrollAnimation(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.once, options.threshold]);

  return elementRef;
}

export default useScrollAnimation;