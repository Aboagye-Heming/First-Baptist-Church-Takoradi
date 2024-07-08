import { useState, useEffect } from "react";
import "./Verse-of-day.css";

const verses = [
  {
    id: 1,
    text: "For the word of God is alive and active.",
    verse: "Hebrews 4:12",
  },
  {
    id: 2,
    text: "Heaven and earth will pass away but my words will never pass away.",
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
      setCurrentVerseIndex((prevIndex) =>
        prevIndex === verses.length - 1 ? 0 : prevIndex + 1
      );
    }, 86400000); // Change verse every 24 hours (86400000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`msg-area ${className}`}>
      <div className="msg-content">
        <div className="additional-content">
          {/* Place your additional content here */}
          <h2>Year Theme</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci
            sed laudantium, temporibus dolorum impedit voluptatem nesciunt error
            alias, inventore nobis mollitia expedita doloremque vero
            repellendus, nisi amet commodi reprehenderit.
          </p>
        </div>
        <h2 className="verse">Verse of the Day</h2>
        <p className="verse-text">{verses[currentVerseIndex].text}</p>
        <p className="verse-reference">{verses[currentVerseIndex].verse}</p>
      </div>
    </section>
  );
};

export default VerseOfTheDay;
