import clsx from 'clsx'; // Utility for combining class names
import { BsSearch } from 'react-icons/bs';
import useScrollDirection from '@/hooks/useScrollDirection'; // Import the hook

// Dummy data for suggestions (replace with your actual data)
const Suggestion = ["All", "Music", "Gaming", "Science", "Comedy", "React", "Next.js"];

const SearchHeader = () => {
  // Use the custom hook
  const scrollDirection = useScrollDirection();


  const isHidden = scrollDirection === 'down';

  return (
    <div
      className={clsx(
        'fixed top-30 left-20 w-full z-10 bg-background pt-8 transition-transform duration-500 ease-in-out',
        {
          'transform -translate-y-[100%]': isHidden, 
          'transform translate-y-0': !isHidden,
        }
      )}
    >

      <div className="w-full z-10 pb-3 text-sm mt-5 flex items-center gap-4 mx-auto justify-start">
        {Suggestion.map((u, i) => (
          <div 
            key={i} 
            className={clsx('px-4 rounded-full py-1', {
              "bg-green-500 text-black font-semibold" : u === "All"
            })}
          >
            {u}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHeader;