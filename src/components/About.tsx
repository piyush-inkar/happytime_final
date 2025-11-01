import { Utensils, Clock, Award } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const features = [
    {
      icon: Utensils,
      title: "Fresh Ingredients",
      description: "We source the finest local and seasonal ingredients for every dish"
    },
    {
      icon: Clock,
      title: "Open Daily",
      description: "Serving delicious meals from 11:00 AM to 10:30 PM, seven days a week"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for culinary excellence and exceptional service"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-yellow-400 text-2xl">About Happy Times</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
             Happy Times has been a beloved destination for food enthusiasts. 
            Our passion for creating memorable dining experiences drives everything we do, 
            from selecting the freshest ingredients to crafting innovative dishes that celebrate both tradition and creativity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
