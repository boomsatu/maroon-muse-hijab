
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-maroon-800 to-maroon-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Join Our Community</h2>
              <p className="mb-4 text-maroon-100 max-w-md">
                Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling tips.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-maroon-200 h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-white text-maroon-800 hover:bg-cream hover:text-maroon-900 whitespace-nowrap h-12 group"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Thank You!" : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs mt-4 text-maroon-200">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
