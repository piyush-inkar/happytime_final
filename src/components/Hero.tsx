import { Button } from "./ui/button";
import { ChefHat } from "lucide-react";
import { motion } from "motion/react";
import bgImage from "@/assets/images/bg1.jpg";

export function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ChefHat className="w-20 h-20 text-yellow-400" /> {/* Bigger Icon */}
        </motion.div>

        {/* ✅ Increased Title Font Sizes */}
        <motion.h1
          className="mb-4 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-wide leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Happy Times
        </motion.h1>

        {/* ✅ Increased Paragraph Font Sizes */}
        <motion.p
          className="mb-8 max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Experience culinary excellence where every dish tells a story.
          Fresh ingredients, authentic flavors, and unforgettable moments.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 transition-transform hover:scale-105 text-lg px-6 py-4"
            onClick={scrollToMenu}
          >
            View Menu
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
