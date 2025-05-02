
import React from "react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-maroon-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="About Maroon Muse"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-maroon-800 rounded-full opacity-20"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Maroon Muse was founded with a simple mission: to create beautiful, high-quality hijabs that allow women to express their personal style while maintaining their modesty.
            </p>
            <p className="text-gray-700 mb-6">
              Each of our pieces is carefully crafted using premium fabrics, with attention to detail that ensures comfort, durability, and elegance. We believe that modest fashion should never compromise on style or quality.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[120px]">
                <h3 className="text-maroon-800 font-bold text-xl mb-1">100%</h3>
                <p className="text-sm text-gray-600">Premium Materials</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[120px]">
                <h3 className="text-maroon-800 font-bold text-xl mb-1">5000+</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[120px]">
                <h3 className="text-maroon-800 font-bold text-xl mb-1">15+</h3>
                <p className="text-sm text-gray-600">Countries Shipped</p>
              </div>
            </div>
            <Button className="bg-maroon-800 hover:bg-maroon-900 text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
