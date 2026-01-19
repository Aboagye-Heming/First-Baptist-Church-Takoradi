import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchFromStrapi } from "../../utils/strapi";

const staticVerses = [
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
  const [verses, setVerses] = useState(staticVerses);

  useEffect(() => {
    const fetchVerse = async () => {
      // Fetch 'verse-of-the-day' single type
      const data = await fetchFromStrapi("/verse-of-the-day");
      if (data && data.data) {
        const attrs = data.data.attributes || data.data;
        if (attrs.text && attrs.reference) {
          // Override with dynamic verse
          setVerses([{ id: 1, text: attrs.text, verse: attrs.reference }]);
        }
      }
    };
    fetchVerse();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % verses.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [verses]);

  const changeVerse = () => {
    setCurrentVerseIndex((prev) => (prev + 1) % verses.length);
  };

  return (
    <div className={`flex flex-col h-full bg-white ${className}`}>
      <div className="bg-[#211560] p-6 text-white flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl">📖</span>
          Verse of the Day
        </h2>
        <button
          onClick={changeVerse}
          className="p-2 hover:bg-[#322380] rounded-full transition-colors"
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
            <p className="text-[#211560] font-bold text-lg">
              — {verses[currentVerseIndex].verse}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="mt-8 pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4 text-amber-600 font-extrabold text-xl uppercase tracking-wider"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>✨</span> 2026 Church Theme <span>✨</span>
          </motion.div>
          <motion.p 
            className="text-2xl md:text-3xl font-bold text-[#211560] leading-tight text-center"
            animate={{ 
              textShadow: ["0px 0px 0px rgba(33,21,96,0)", "0px 0px 15px rgba(33,21,96,0.2)", "0px 0px 0px rgba(33,21,96,0)"] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            "DISCOVERING OUR IDENTITY IN CHRIST."
          </motion.p>
          <p className="text-center text-lg text-gray-500 font-serif mt-2 font-medium">
             (MATTHEW 16:13-17, 1 PETER 2:9)
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mt-6">
          {verses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVerseIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentVerseIndex ? "bg-[#211560] w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerseOfTheDay;
