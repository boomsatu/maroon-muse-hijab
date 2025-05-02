
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-24">
      <div className="absolute inset-0 overflow-hidden hero-pattern"></div>
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-maroon-800 mb-6 leading-tight">
              Elegance in Every Fold
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              Discover our premium collection of maroon hijabs, designed with quality fabrics and timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-maroon-800 hover:bg-maroon-900 text-white px-8 py-6">
                Shop Collection
              </Button>
              <Button variant="outline" className="border-maroon-800 text-maroon-800 hover:bg-maroon-100 px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-64 h-64 bg-cream rounded-full opacity-50 -z-10"></div>
              <img
                src="/placeholder.svg"
                alt="Elegant maroon hijab"
                className="w-full max-w-lg object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-maroon-200 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
