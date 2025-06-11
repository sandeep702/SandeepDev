
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = ["Home", "About", "Projects", "Skills", "Education", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 h-36 flex  items-center right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-gray-900/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="group cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => scrollToSection("home")}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black p-2 rounded-lg border border-cyan-500/50">
                  <Code className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="font-mono text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  SandeepDev
                </div>
                <div className="text-xs text-white/60 font-medium">
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/90 font- text-[24px] font-serif hover:text-cyan-400 transition-colors duration-300 relative group "
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-black/50 text-white hover:text-cyan-400 border-white/30 hover:border-cyan-400/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-gradient-to-r from-cyan-500 to-lime-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 font-bold"
          >
            Get In Touch
          </Button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 space-y-4 border-t border-white/20 mt-4">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-white/90 hover:text-cyan-400 transition-colors duration-300 py-2 font-medium"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 mt-4 font-bold"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
