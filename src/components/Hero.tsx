import { Button } from "./ui/button";
import { ChefHat } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1666633050341-5580de071aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYxNTMyODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ChefHat className="w-16 h-16 text-yellow-400" />
        </motion.div>
        <motion.h1 
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Happy Times
        </motion.h1>
        <motion.p 
          className="mb-8 max-w-2xl mx-auto"
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
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 transition-transform hover:scale-105" onClick={scrollToMenu}>
            View Menu
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
