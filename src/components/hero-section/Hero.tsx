import "./hero.css";

const Hero = () => {
  const text = "Welcome To First Baptist Church";

  return (
    <section className="banner-area">
      <div className="banner-img img1"></div>
      <div className="banner-img img2"></div>
      <div className="banner-img img3"></div>
      <div className="banner-img img4"></div>
      <div className="banner-img img5"></div>

      <div className="banner-text snake-text">
        <h3>
          {text.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h3>
      </div>
    </section>
  );
};

export default Hero;
