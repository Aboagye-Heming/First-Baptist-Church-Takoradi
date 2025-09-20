// components/AnimatedBackground.js
import "./animated.css";

const AnimatedBackground = () => {
  return (
    <div className="global-bg-particles">
      {[...Array(15)].map((_, i) => (
        <span key={i} className="global-particle"></span>
      ))}
    </div>
  );
};

export default AnimatedBackground;
