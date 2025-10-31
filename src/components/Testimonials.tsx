import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing food and atmosphere! The burgers are to die for, and the service is exceptional. Happy Times is my go-to spot for a great meal.",
      role: "Food Enthusiast"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best restaurant in town! The menu has something for everyone, and everything we've tried has been delicious. Highly recommend!",
      role: "Regular Customer"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The perfect place for family dinners! Great food, welcoming staff, and a fun vibe. Our kids love coming here!",
      role: "Happy Family"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Incredible experience every time! The quality of food is consistent and the attention to detail is remarkable. Five stars all the way!",
      role: "Food Critic"
    },
    {
      name: "Jessica Martinez",
      rating: 5,
      text: "Happy Times lives up to its name! From the moment you walk in, you feel welcomed. The food is absolutely fantastic!",
      role: "Satisfied Diner"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="mt-20 mb-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4">What Our Customers Say</h2>
        <p className="max-w-2xl mx-auto">
          Don't just take our word for it - hear from our happy customers!
        </p>
      </motion.div>

      <div 
        className="relative px-4 max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Desktop View - 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className="bg-yellow-400 rounded-lg p-6 relative overflow-hidden border-4 border-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                scale: 1.02
              }}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-16 h-16 text-black" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                
                <p className="mb-6 min-h-[120px]">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t-2 border-black pt-4">
                  <p className="text-black opacity-90">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-black opacity-70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet View - 2 cards */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {getVisibleTestimonials().slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className="bg-yellow-400 rounded-lg p-6 relative overflow-hidden border-4 border-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                scale: 1.02
              }}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-16 h-16 text-black" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                
                <p className="mb-6 min-h-[120px]">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t-2 border-black pt-4">
                  <p className="text-black opacity-90">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-black opacity-70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - 1 card with animation */}
        <div className="md:hidden relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              <div className="bg-yellow-400 rounded-lg p-6 relative overflow-hidden border-4 border-black">
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-16 h-16 text-black" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                  
                  <p className="mb-6 min-h-[120px]">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="border-t-2 border-black pt-4">
                    <p className="text-black opacity-90">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-black opacity-70">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-yellow-400 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center z-10"
          whileHover={{ scale: 1.1, backgroundColor: "#000" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-black hover:text-yellow-400" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-yellow-400 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center z-10"
          whileHover={{ scale: 1.1, backgroundColor: "#000" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-black hover:text-yellow-400" />
        </motion.button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full border-2 border-black ${
              index === currentIndex ? 'bg-yellow-400' : 'bg-transparent'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
