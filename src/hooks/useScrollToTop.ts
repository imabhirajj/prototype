import { useEffect } from 'react';

/**
 * Custom hook to scroll to top when component mounts
 * Useful for page components to ensure they start from the top
 */
export const useScrollToTop = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
};

/**
 * Custom hook to scroll to top with instant behavior
 * Useful for immediate scroll without animation
 */
export const useScrollToTopInstant = () => {
  useEffect(() => {
    // Scroll to top instantly when component mounts
    window.scrollTo(0, 0);
  }, []);
};
