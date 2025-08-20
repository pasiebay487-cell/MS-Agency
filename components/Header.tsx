import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">DigitalPro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors py-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors py-2">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors py-2">Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors py-2">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors py-2">Contact</a>
              <Button className="mt-4 w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}