import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface IntersectionObserverHook {
  (options: IntersectionObserverInit): [MutableRefObject<any>, boolean];
}

const useIntersectionObserver: IntersectionObserverHook = (options) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
