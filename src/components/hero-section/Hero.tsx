import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchFromStrapi, getStrapiMedia } from "../../utils/strapi";
import image1 from "../../assets/images/image1.jpg";
import ch2 from "../../assets/images/ch2.png";
import ch3 from "../../assets/images/ch3.png";
import ch4 from "../../assets/images/ch4.JPG";
import ch5 from "../../assets/images/ch5.JPG";

const staticImages = [image1, ch2, ch3, ch4, ch5];
const staticText = "Welcome To First Baptist Church";
const staticSubtitle = "Worship • Discipleship • Service";

const Hero = () => {
  const [images, setImages] = useState(staticImages);
  const [text, setText] = useState(staticText);
  const [subtitle, setSubtitle] = useState(staticSubtitle);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      // Fetch 'hero' single type, populating all fields (esp. media)
      const data = await fetchFromStrapi("/hero?populate=*");
      
      if (data && data.data) {
        // Strapi v4/v5 response structure handling
        // Adjust based on strict Single Type response: { data: { id, attributes: { ... } } }
        const attrs = data.data.attributes || data.data; 

        if (attrs.title) setText(attrs.title);
        if (attrs.subtitle) setSubtitle(attrs.subtitle);
        
        // Handle Images
        if (attrs.images && attrs.images.data) {
           const strapiImages = attrs.images.data.map((img: any) => getStrapiMedia(img.attributes?.url || img.url)).filter(Boolean);
           if (strapiImages.length > 0) {
             setImages(strapiImages);
           }
        }
      }
    };

    loadData();
  }, []);

  // Image Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {images.map((imgSrc, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgSrc})` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImageIndex ? 0.6 : 0,
            scale: index === currentImageIndex ? 1.05 : 1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div className="flex flex-wrap justify-center overflow-hidden mb-6">
          {text.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif inline-block mr-4 mb-2"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-gray-200">
            {subtitle}
          </p>
          <div className="flex justify-center gap-4">
            {/* <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Join Us
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-full font-semibold transition-all">
              Watch Live
            </button> */}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-8 h-8 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
