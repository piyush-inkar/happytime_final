import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { FloatingFood } from "./components/FloatingFood";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <FloatingFood />
      <Navigation />
      <div id="home" className="relative z-10">
        <Hero />
      </div>
      <div id="about" className="relative z-10">
        <About />
      </div>
      <div id="menu" className="relative z-10">
        <Menu />
      </div>
      <div className="relative z-10">
        <Gallery />
      </div>
      <div id="contact" className="relative z-10">
        <Contact />
      </div>
    </div>
  );
}