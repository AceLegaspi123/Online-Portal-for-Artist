"use client"
import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import useScrollDirection from '@/hooks/useScrollDirection';

const Suggestion: string[] = [
  "All","Music","Gaming","Science","Comedy","Digital","Pixelated","Anime","Portrait",
  "Abstract","Surrealism","Impressionism","Cubism","Minimalism","Street Art","Graffiti",
  "Sculpture","Photography","Calligraphy","Illustration","Watercolor","Oil Painting",
  "Mixed Media","Collage","Fantasy Art","Concept Art"
];

const SearchHeader = () => {
  const scrollDirection = useScrollDirection();
  const isHidden = scrollDirection === 'down';

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    checkScroll();
    slider.addEventListener('scroll', checkScroll);
    return () => slider.removeEventListener('scroll', checkScroll);
  }, []);

  const handleSlide = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const amount = direction === 'right' ? 200 : -200;
      sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={clsx(
        'absolute top-15 left-0 right-0 w-full z-0 bg-background pt-8 transition-transform duration-500 ease-in-out',
        {
          'transform -translate-y-[60%]': isHidden,
          'transform translate-y-0': !isHidden,
        }
      )}
    >
      <div className="relative w-full pb-3 text-sm mt-5 flex items-center">
        {/* Left button */}
        {canScrollLeft && (
          <button
            onClick={() => handleSlide('left')}
            className="absolute left-0 hover:bg-slate-700 cursor-pointer hover:scale-105 opacity-50 hover:opacity-100 transition duration-200 p-2 rounded-full shadow-md z-20"
          >
            <BsChevronLeft size={20} />
          </button>
        )}

        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex gap-4 justify-start overflow-hidden scroll-smooth w-full "
        >
          {Suggestion.map((u, i) => (
            <div
              key={i}
              className={clsx(
                'px-6 rounded-md py-2 cursor-pointer text-nowrap hover:opacity-80 transition duration-200 ease-in',
                {
                  'bg-green-500 text-black font-semibold': u === 'All',
                  'bg-primary border-primary-line border-1': u !== 'All',
                }
              )}
            >
              {u}
            </div>
          ))}
        </div>

        {/* Right button */}
        <div className="absolute top-0 right-0 h-10 w-20">
          {canScrollRight && (
            <button
              onClick={() => handleSlide('right')}
              className="absolute right-0 hover:scale-105 hover:bg-slate-700 cursor-pointer opacity-50 hover:opacity-100 transition duration-200 p-2 rounded-full shadow-md z-20"
            >
              <BsChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
