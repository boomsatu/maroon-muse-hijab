
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-maroon-800">Maroon Muse</h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-800 hover:text-maroon-800 transition-colors">Home</a>
            <a href="#products" className="text-gray-800 hover:text-maroon-800 transition-colors">Products</a>
            <a href="#models" className="text-gray-800 hover:text-maroon-800 transition-colors">Models</a>
            <a href="#about" className="text-gray-800 hover:text-maroon-800 transition-colors">About</a>
            <Button variant="outline" className="border-maroon-800 text-maroon-800 hover:bg-maroon-800 hover:text-white">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-4 px-4">
            <a href="/" className="text-gray-800 hover:text-maroon-800 transition-colors">Home</a>
            <a href="#products" className="text-gray-800 hover:text-maroon-800 transition-colors">Products</a>
            <a href="#models" className="text-gray-800 hover:text-maroon-800 transition-colors">Models</a>
            <a href="#about" className="text-gray-800 hover:text-maroon-800 transition-colors">About</a>
            <Button variant="outline" className="border-maroon-800 text-maroon-800 hover:bg-maroon-800 hover:text-white w-full">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
