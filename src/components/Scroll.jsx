import React, { useState, useEffect } from 'react';

function Scroll() {
  const [isEnd, setIsEnd] = useState(false);

  const handleScrollNext = () => {
    if (isEnd) return;

    const vh = window.innerHeight;
    const container = document.querySelector('.snap-container');
    if (container) {
      container.scrollBy({ top: vh, behavior: 'smooth' });
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
      <div
        className="arrow-icon"
        onClick={handleScrollNext}
        style={{ cursor: isEnd ? 'default' : 'pointer' }}
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
      </div>
    </div>
  );
}

export default Scroll;