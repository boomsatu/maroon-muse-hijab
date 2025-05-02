
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

const products: ProductProps[] = [
  {
    id: "1",
    name: "Premium Silk Maroon Hijab",
    price: "$59.99",
    image: "/placeholder.svg",
    category: "Premium",
    isNew: true
  },
  {
    id: "2",
    name: "Cotton Maroon Hijab",
    price: "$34.99",
    image: "/placeholder.svg",
    category: "Casual"
  },
  {
    id: "3",
    name: "Evening Shimmer Hijab",
    price: "$69.99",
    image: "/placeholder.svg",
    category: "Luxury",
    isNew: true
  },
  {
    id: "4",
    name: "Everyday Maroon Wrap",
    price: "$29.99",
    image: "/placeholder.svg",
    category: "Essential"
  }
];

const ProductCard: React.FC<ProductProps> = ({ name, price, image, category, isNew }) => {
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-500"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-maroon-800">New</Badge>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs text-maroon-600 uppercase tracking-wider">{category}</span>
        <h3 className="font-medium text-lg mb-2 font-playfair text-gray-800">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-maroon-800 font-semibold">{price}</span>
          <Button size="sm" className="bg-maroon-800 hover:bg-maroon-900 text-white">
            <ShoppingBag className="h-4 w-4 mr-2" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon-800 mb-4">Our Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium maroon hijabs, designed with quality fabrics and crafted for comfort and style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-maroon-800 hover:bg-maroon-900 text-white px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
