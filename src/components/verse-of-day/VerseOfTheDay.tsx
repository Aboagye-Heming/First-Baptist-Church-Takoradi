import { useState, useEffect } from "react";
import "./Verse-of-day.css";

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
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentVerseIndex((prevIndex) =>
          prevIndex === verses.length - 1 ? 0 : prevIndex + 1
        );
        setIsChanging(false);
      }, 500);
    }, 8000); // Change every 8 seconds for demo (originally 24 hours)

    return () => clearInterval(interval);
  }, []);

  const changeVerse = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentVerseIndex((prevIndex) =>
        prevIndex === verses.length - 1 ? 0 : prevIndex + 1
      );
      setIsChanging(false);
    }, 500);
  };

  return (
    <section className={`verse-of-day-container ${className}`}>
      <div className="verse-card">
        <div className="verse-header">
          <h2 className="verse-title">
            <span className="icon">📖</span>
            Verse of the Day
          </h2>
          <button
            className="refresh-btn"
            onClick={changeVerse}
            aria-label="Change verse"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className={`verse-content ${isChanging ? "fade-out" : "fade-in"}`}>
          <p className="verse-text">"{verses[currentVerseIndex].text}"</p>
          <p className="verse-reference">— {verses[currentVerseIndex].verse}</p>
        </div>

        <div className="theme-section">
          <div className="theme-header">
            <span className="theme-icon">✨</span>
            <h3>2025 Church Theme</h3>
          </div>
          <p className="theme-text">
            "Building stronger faith, serving with love, and shining God's light
            in our community."
          </p>
        </div>

        <div className="verse-indicators">
          {verses.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentVerseIndex ? "active" : ""
              }`}
              onClick={() => {
                setIsChanging(true);
                setTimeout(() => {
                  setCurrentVerseIndex(index);
                  setIsChanging(false);
                }, 500);
              }}
              aria-label={`Go to verse ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerseOfTheDay;
