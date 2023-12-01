import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You can use any up arrow icon you prefer


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check when to display the button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="w-[50px] h-[50px] fixed bottom-3 right-4 bg-[#3A0CA3] hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 flex justify-center items-center z-[1000000]"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;