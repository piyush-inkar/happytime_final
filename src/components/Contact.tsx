import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Vikas college road, Kannamwar Nagar-2,Vikhroli(EAST), Mumbai-400083."]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9389393931"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["happytimevikhroli@gmail.com "]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Everyday From 11:00 AM to 10:30 PM"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-orange-500 text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Visit Us</h2>
          <p className="max-w-2xl mx-auto">
            Stop by anytime or contact us — we're always happy to connect!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-7 h-7 text-black" />
                </motion.div>
              </div>
              <h3 className="mb-3">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center border-t border-black pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center gap-6 mb-6">
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-black transition-colors group"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Instagram className="w-6 h-6 text-black group-hover:text-yellow-400" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-black transition-colors group"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Facebook className="w-6 h-6 text-black group-hover:text-yellow-400" />
            </motion.a>
          </div>
          <p>© 2025 Happy Times. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
