import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";

export function Navigation() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact Us", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-14 h-14 p-0 shadow-lg flex items-center justify-center transition-colors">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-black border-l-4 border-orange-500 w-80">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigate through the Happy Times website sections
          </SheetDescription>
          <div className="flex flex-col h-full">
            <div className="mb-12 mt-4">
              <h2 className="text-yellow-400">Happy Times</h2>
            </div>
            
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-4 px-6 rounded-lg bg-orange-500/10 hover:bg-orange-500 text-white transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            <div className="mt-auto pt-8 border-t border-orange-500">
              <p className="text-gray-400 text-center">Navigate with ease</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
