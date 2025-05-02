
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ModelGallery from "@/components/ModelGallery";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFFCF9]">
      <Navbar />
      <Hero />
      <div className="w-full h-20 bg-gradient-to-b from-white to-cream/30 -mt-10"></div>
      <ProductShowcase />
      <ModelGallery />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
