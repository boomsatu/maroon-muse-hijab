
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Images } from "lucide-react";

interface ModelProps {
  id: string;
  name: string;
  image: string;
  style: string;
}

const models: ModelProps[] = [
  {
    id: "1",
    name: "Classic Drape",
    image: "/placeholder.svg",
    style: "Elegant wrap style ideal for formal occasions",
  },
  {
    id: "2",
    name: "Modern Fold",
    image: "/placeholder.svg",
    style: "Contemporary style perfect for daily wear",
  },
  {
    id: "3",
    name: "Evening Elegance",
    image: "/placeholder.svg",
    style: "Luxurious styling for special events",
  },
];

const ModelGallery: React.FC = () => {
  return (
    <section id="models" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon-800 mb-4">Styled to Perfection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore different ways to style our maroon hijabs with inspiration from our models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-playfair font-semibold">{model.name}</h3>
                <p className="text-gray-200 text-sm mb-4">{model.style}</p>
                <Button variant="outline" className="w-full bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-maroon-800 transition-all">
                  Learn This Style
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="link" className="text-maroon-800 hover:text-maroon-900 text-lg font-medium flex items-center mx-auto">
            View Gallery <Images className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelGallery;
