
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-maroon-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Join Our Community</h2>
          <p className="mb-8 text-maroon-100">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-maroon-200"
            />
            <Button className="bg-white text-maroon-800 hover:bg-cream hover:text-maroon-900 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-xs mt-4 text-maroon-200">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
