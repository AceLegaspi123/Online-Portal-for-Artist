'use client'

import { useState, useEffect } from 'react';

/**
 * Custom hook to determine the current scroll direction.
 * Returns 'up', 'down', or 'initial' (when at the very top).
 */
const useScrollDirection = () => {
  // State to store the last known scroll position
  const [lastScrollY, setLastScrollY] = useState(0);
  // State to store the detected scroll direction
  const [scrollDirection, setScrollDirection] = useState('initial'); 

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Get the current vertical scroll position
      const currentScrollY = window.scrollY;
      
      // 1. Check if the user is at the very top of the page
      if (currentScrollY === 0) {
        setScrollDirection('initial');
      } 
      // 2. Check for scroll direction change
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down AND past the initial 100px buffer
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection('up');
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return scrollDirection;
};

export default useScrollDirection;