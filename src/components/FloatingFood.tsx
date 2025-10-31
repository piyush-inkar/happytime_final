import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FloatingFood() {
  const foodItems = [
    {
      src: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NjE0Nzg3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "French Fries",
      size: "w-32 h-32",
      position: "top-20 left-10",
      delay: 0,
      duration: 3
    },
    {
      src: "https://images.unsplash.com/photo-1544982503-9f984c14501a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc2MTUzMzYwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pizza",
      size: "w-40 h-40",
      position: "top-1/3 right-20",
      delay: 0.5,
      duration: 4
    },
    {
      src: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGNvbmV8ZW58MXx8fHwxNzYxNTQ4Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ice Cream",
      size: "w-28 h-28",
      position: "bottom-1/4 left-16",
      delay: 1,
      duration: 3.5
    },
    {
      src: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBpY29ufGVufDF8fHx8MTc2MTU1OTc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Burger",
      size: "w-36 h-36",
      position: "top-40 right-32",
      delay: 0.3,
      duration: 4.5
    },
    {
      src: "https://images.unsplash.com/photo-1735643434124-f51889fa1f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmt8ZW58MXx8fHwxNzYxNTE5NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Soda",
      size: "w-24 h-24",
      position: "bottom-40 right-24",
      delay: 0.7,
      duration: 3.8
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {foodItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} ${item.size} opacity-20`}
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/30 shadow-lg shadow-yellow-400/20">
            <ImageWithFallback
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
