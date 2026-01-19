import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const verses = [
  {
    id: 1,
    text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.",
    verse: "Hebrews 4:12",
  },
  {
    id: 2,
    text: "Heaven and earth will pass away, but my words will never pass away.",
    verse: "Matthew 24:35",
  },
  {
    id: 3,
    text: "The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom.",
    verse: "Isaiah 40:28",
  },
];

interface VerseOfTheDayProps {
  className?: string;
}

const VerseOfTheDay: React.FC<VerseOfTheDayProps> = ({ className }) => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % verses.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const changeVerse = () => {
    setCurrentVerseIndex((prev) => (prev + 1) % verses.length);
  };

  return (
    <div className={`flex flex-col h-full bg-white ${className}`}>
      <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl">📖</span>
          Verse of the Day
        </h2>
        <button
          onClick={changeVerse}
          className="p-2 hover:bg-blue-500 rounded-full transition-colors"
          aria-label="Change verse"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="p-8 flex-1 flex flex-col justify-center relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVerseIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-gray-800 font-serif leading-relaxed italic mb-6">
              "{verses[currentVerseIndex].text}"
            </p>
            <p className="text-blue-600 font-bold text-lg">
              — {verses[currentVerseIndex].verse}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-2 text-amber-500 font-bold">
            <span>✨</span> 2025 Church Theme
          </div>
          <p className="text-gray-600 italic">
            "Building stronger faith, serving with love, and shining God's light in our community."
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {verses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVerseIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentVerseIndex ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerseOfTheDay;
