
const Hero = () => {
  return (
    <>
      <section className="banner-area flex flex-col items-center justify-center py-24 relative">
        <div className="banner-img"></div>
        <h3>Welcome To First Baptist Church</h3>
        <h1>
          God is <span className="text-red-600">Almighty</span>
        </h1>
        <a
          href="#"
          className="banner-btn bg-red-600 py-2 px-5 mt-5 rounded-full"
        >
          More Info
        </a>
      </section>
    </>
  );
};

export default Hero;
