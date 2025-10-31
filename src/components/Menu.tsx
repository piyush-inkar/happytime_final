import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const dishes = [
    {
      name: "Burgers",
      description: "Veg and NON-Veg Burgers!",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyfGVufDF8fHx8MTc2MTQ3NzMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Pastas",
      description: "Veg and NON-Veg Pastas!",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzYxNDc5NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Fries",
      image: "https://images.unsplash.com/photo-1677653805080-59c57727c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkfGVufDF8fHx8MTc2MTQ2ODE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Pizzas",
      description: "Veg and NON-Veg Pizzas!",
      image: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2R8ZW58MXx8fHwxNzYxNDkzNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Drinks",
      image: "https://images.unsplash.com/photo-1706650616334-97875fae8521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lcnxlbnwxfHx8fDE3NjE0OTgzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Main Course",
      description: "Veg and NON-Veg Noodles and Rice!",
      image: "https://images.unsplash.com/photo-1680090966824-eb9e8500bc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjE1MjE4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Starter and Soup",
      description: "Veg and NON-Veg Starters!",
      image: "https://images.unsplash.com/photo-1640210184279-204ee40e82e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBzdGFydGVyJTIwZm9vZHxlbnwxfHx8fDE3NjE4NTE0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Franky and Rolls",
      description: "Veg and NON-Veg Franky and Rolls!",
      image: "https://images.unsplash.com/photo-1741882611149-dd36197e363b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFua3klMjB3cmFwJTIwcm9sbHxlbnwxfHx8fDE3NjE4NTE0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Sandwiches",
      description: "Veg and NON-Veg Sandwiches!",
      image: "https://images.unsplash.com/photo-1734809569547-7c9ef0973222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGRlbGl8ZW58MXx8fHwxNzYxNzYwNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const menuDetails: Record<string, Array<{ name: string; price: string }>> = {
    "Burgers": [
      { name: "Veg-Aloo Tikki Burger", price: "60/-" },
      { name:"Veggies Burger", price: "80/-"},
      { name:"Spicy Paneer Burger ", price: "150/-"},
      { name:"Chicken Burger", price: "100/-"},
      { name:"Chicken Peri-Peri Burger ", price: "230/-"},
      { name:"Spicy Chicken Burger", price: "200/-"},
      { name:"Fish Burger ", price: "200/-"},
      { name:"Prawns Burger ", price: "150/-"},
      { name:"Chicken Khima Burger ", price: "130/-"}
    ],
    "Pastas": [
      { name: "Veg Alfredo", price: "180/-" },
      { name:"Non-Veg Alfredo", price: "210/-"},
      { name:"Veg Pink Sauce", price: "210/-"},
      { name:"Non-Veg Pink Sauce", price: "260/-"},
      { name:"Veg Red Sauce", price: "180/-"},
      { name:"Non-Veg Red Sauce", price: "210/-"}
    ],
    "Fries": [
      { name: "Classic Salted", price: "100/-" },
      { name:"Peri-Peri", price: "130/-"},
      { name:"Cheesy Peri-Peri", price: "160/-"},
      {name:"Chicken Fingers",price:"180/-"}
    ],
    "Pizzas": [
      { name: "Veg-Classic Margherita 8inch", price: "140/-" },
      { name: "Veg-Classic Margherita 10inch", price: "170/-" },
      { name:"Veg-Three Cheese 8inch", price: "190/-"},
      { name:"Veg-Three Cheese 10inch", price: "230/-"},
      { name:"Veggie Crunch 8inch", price: "160/-"},
      { name:"Veggie Crunch 10inch", price: "190/-"},
      { name:"Veg-Mushroom 8inch", price: "190/-"},
      { name:"Veg-Mushroom 10inch", price: "210/-"},
      { name:"Veggie Delight 8inch", price: "200/-"},
      { name:"Veggie Delight 10inch", price: "230/-"},
      { name:"Paneer Tikka 8inch", price: "210/-"},
      { name:"Paneer Tikka 10inch", price: "250/-"},
      { name:"Paneer Makhni 8inch", price: "210/-"},
      { name:"Paneer Makhni 10inch", price: "250/-"},
      { name:"Paneer Peri-Peri 8inch", price: "210/-"},
      { name:"Paneer Peri-Peri 10inch", price: "250/-"},
      { name:"Veg-Chefs Special 8inch", price: "240/-"},
      { name:"Veg-Ches Special 10inch", price: "290/-"},
      { name:"Classic Chicken 8inch", price: "150/-"},
      { name:"CLassic Chicken 10inch", price: "190/-"},
      { name:"Chicken Blast 8inch", price: "200/-"},
      { name:"Chicken Blast 10inch", price: "230/-"},
      { name:"BBQ Chicken 8inch", price: "210/-"},
      { name:"BBQ Chicken 10inch", price: "270/-"},
      { name:"Peri-Peri Chicken 8inch", price: "210/-"},
      { name:"Peri-Peri Chicken 10inch", price: "250/-"},
      { name:"Three Cheese Chicken 8inch", price: "230/-"},
      { name:"Three Cheese Chicken 10inch", price: "300/-"},
      { name:"Chicken Tikka 8inch", price: "230/-"},
      { name:"Chicken Tikka 10inch", price: "300/-"},
      { name:"Mushroom Chicken 8inch", price: "260/-"},
      { name:"Mushroom Chicken 10inch", price: "300/-"},
      { name:"Chicken Overload 8inch", price: "290/-"},
      { name:"Chicken Overload 10inch", price: "310/-"},
      { name:"Chefs Special (Non-Veg) 8inch", price: "320/-"},
      { name:"Chefs Special (Non-Veg) 10inch", price: "350/-"}
    ],
    "Drinks": [
      { name:"Cold Coffee", price: "120/-"},
      { name:"Ice Coffee", price: "100/-"},
      { name:"Mojito", price: "120/-"},
      { name:"Strawberry Shake", price: "130/-"},
      { name:"Chocolate Shake", price: "130/-"},
      { name:"Mix Berry", price: "150/-"}
    ],
    "Main Course": [
      {name:"Veg Hakka Noodles", price:"150/200/-"},
      {name:"Non-Veg Hakka Noodles", price:"190/240/-"},
      {name:"Veg Schezwan Noodles", price:"160/210/-"},
      {name:"Non-Veg Shezwan Noodles", price:"200/250/-"},
      {name:"Veg Manchurian Noodles", price:"160/220/-"},
      {name:"Non-Veg Manchurian Noodles", price:"230/300/-"},
      {name:"Veg Triple Noodles", price:"220/-"},
      {name:"Non-Veg Triple Noodles", price:"290/-"},
      {name:"Veg Garlic Noodles", price:"200/-"},
      {name:"Non-Veg Garlic Noodles", price:"230/-"},
      {name:"Veg Burnt Garlic Noodles", price:"220/-"},
      {name:"Non-Veg Burnt Garlic Noodles", price:"260/-"},
      
      {name:"Veg Fried Rice", price:"110/160/-"},
      {name:"Non-Veg Fried Rice", price:"130/190/-"},
      {name:"Veg Schezwan Fried Rice", price:"120/200/-"},
      {name:"Non-Veg Schezwan Fried Rice", price:"180/230/-"},
      {name:"Veg Manchurian Rice", price:"180/230/-"},
      {name:"Non-Veg Manchurain Rice", price:"190/290/-"},
      {name:"Veg Triple Rice", price:"260/-"},
      {name:"Non-Veg Triple Rice", price:"290/-"},
      {name:"Veg Burnt Garlic Rice", price:"220/-"},
      {name:"Non-Veg Burnt Garlic Rice", price:"260/-"},

      {name:"EGG Fried Rice", price:"150/200/-"},
      {name:"EGG Schezwan Fried Rice", price:"160/210/-"},
      {name:"EGG Triple Rice", price:"270/-"},
      {name:"EGG Burnt Garlic Rice", price:"230/-"},
      {name:"Veg Cheese Paratha",price:"120/-"},
      {name:"Chicken Khima Paratha",price:"150/-"}
      
    ],
    "Starter and Soup": [
      {name:"Chilli Dry", price:"250/-"},
      {name:"Manchurian Dry",price:"250/-"},
      {name:"Chinese Tadka Bhel",price:"160/-"},
      {name:"Crispy",price:"260/-"},
      {name:"65",price:"260/-"},
      {name:"Oil Fry Lollipop (4/8)",price:"150/250/-"},
      {name:"Masala Lollipop (4/8)", price:"160/260/-"},
      {name:"Cheese Wafer Paao",price:"50/-"},
      

      {name:"Manchow Soup",price:"140/160/-"},
      {name:"Hot & Sour Soup",price:"140/160/-"},
      {name:"Clear Soup",price:"140/160/-"}
    ],
    "Franky and Rolls": [
      {name:"Veg Kathi Roll",price:"70/-"},
      {name:"Veg Schezwan Kathi Roll",price:"90/-"},
      {name:"Veg Cheese Kathi Roll",price:"110/-"},
      {name:"Chi.Kathi Roll",price:"120/-"},
      {name:"Chi.Schezwan Kathi Roll",price:"130/-"},
      {name:"EGG Kathi Roll",price:"80/-"},
      {name:"EGG Schezwan Kathi Roll",price:"110/-"},
      {name:"Chi.Cheese Kathi Roll",price:"130/-"},

      {name:"Chi.Frankie",price:"70/-"},
      {name:"Chi.Cheese Frankie",price:"90/-"},
      {name:"Chi.Mayo Frankie",price:"80/-"},
      {name:"Chi.Cheese Mayo Frankie",price:"100/-"},
      {name:"Chi.Schezwan Frankie",price:"100/-"},
      {name:"Chi.Schez.Cheese Frankie",price:"120/-"},
      {name:"Chi.Mayo Schez.Cheese Frankie",price:"100/-"},
      {name:"Chi.Chilli Frankie",price:"120/-"},
      {name:"Chi.Chili Cheese Frankie",price:"120/-"},
      {name:"Chi.Masala Frankie",price:"90/-"},
      {name:"Chi.Masala Cheese Frankie",price:"110/-"},
      {name:"Chi.Cheese Masala Schez.Frankie",price:"130/-"}
    ],
    "Sandwiches": [
      {name:"Classic Veg",price:"65/-"},
      {name:"Classic Veg Grill",price:"75/-"},
      {name:"Classic Veg Cheese Grill",price:"100/-"},
      {name:"Veg-Aloo Masala Toast",price:"100/-"},
      {name:"Veg-Cheese Corn",price:"110/-"},
      {name:"Veg Club",price:"150/-"},

      {name:"Classic Chicken",price:"100/-"},
      {name:"Classic Chicken Grill",price:"120/-"},
      {name:"Classic Chicken & Cheese Grill",price:"140/-"},
      {name:"BBQ Chicken",price:"120/-"},
      {name:"Chicken Junglee",price:"150/-"},
      {name:"Chicken Club",price:"180/-"}
    ]
  };

  return (
    <section className="py-20 px-4 bg-yellow-400">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.10 }}
        >
          <h2 className="mb-4 text-black">Our Signature Dishes</h2>
          <p className="text-black max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, 
            each crafted with passion and the finest ingredients. Click any category to see the full menu!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCategory(dish.name)}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-black text-white border-orange-500 border-2 h-full">
                <div className="aspect-square overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3>{dish.name}</h3>
                  </div>
                  <p className="text-gray-300">{dish.description}</p>
                  <motion.p 
                    className="text-orange-500 mt-3 text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Click to view full menu →
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dialog for displaying full menu */}
      <Dialog open={selectedCategory !== null} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-yellow-400 border-4 border-black">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="text-black">{selectedCategory} Menu</DialogTitle>
              <motion.button
                onClick={() => setSelectedCategory(null)}
                className="text-black hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {selectedCategory && menuDetails[selectedCategory]?.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black text-white p-4 rounded-lg border-2 border-orange-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
                  borderColor: "#FACC15"
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white">{item.name}</h3>
                  <span className="text-orange-500 ml-2">{item.price}</span>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
