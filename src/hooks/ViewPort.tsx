import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null); // Explicitly specify the ref type

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold]);

  return [targetRef, isInView] as const; // Return a tuple with a proper type
};

export default useIntersectionObserver;
