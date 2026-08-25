import React, { useState, useEffect } from 'react';
import { getMotionSafeScrollBehavior } from '../utils/motion.js';

function Scroll() {
  const [isEnd, setIsEnd] = useState(false);

  const handleScrollNext = () => {
    if (isEnd) return;

    const vh = window.innerHeight;
    const container = document.querySelector('.snap-container');
    if (container) {
      container.scrollBy({ top: vh, behavior: getMotionSafeScrollBehavior() });
    }
  };

  useEffect(() => {
    const container = document.querySelector('.snap-container');

    const handleScroll = () => {
      if (!container) return;

      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10;

      setIsEnd(atBottom);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed-footer-arrow ${isEnd ? 'is-ended' : ''}`}>
      <button
        type="button"
        className="arrow-icon"
        onClick={handleScrollNext}
        disabled={isEnd}
        aria-label="Ir para a próxima seção"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}

export default Scroll;
