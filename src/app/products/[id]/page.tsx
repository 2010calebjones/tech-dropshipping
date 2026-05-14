'use client';

import { PRODUCTS } from "@/lib/data";
import { Star, Truck, ShieldCheck, Zap, ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { notFound, useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link href="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-8 group">
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Gallery Placeholder */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden relative">
            <span className="text-gray-300 font-bold tracking-widest uppercase text-center px-4">Product Image Preview</span>
            {product.trending && (
               <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                 TRENDING ITEM
               </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                 <span className="text-[8px] text-gray-300 uppercase font-bold text-center px-1">Angle {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-bold uppercase tracking-wider text-sm">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`h-4 w-4 ${s <= Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2 text-sm font-bold text-gray-700">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-400 border-l pl-4">{product.reviews} customer reviews</span>
            </div>
          </div>

          <div className="flex items-baseline gap-4 border-y py-4">
            <span className="text-4xl font-black text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed text-lg italic">
            "{product.description}"
          </p>

          <div className="space-y-4 pt-4">
             <div className="flex items-center gap-4">
                <div className="w-32 h-12 border border-gray-300 rounded-md flex items-center justify-between px-4">
                   <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 hover:text-primary font-bold text-xl"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                   <span className="font-bold">{quantity}</span>
                   <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 hover:text-primary font-bold text-xl"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button size="lg" className="flex-grow h-12 gap-2" onClick={handleAddToCart}>
                   <ShoppingCart className="h-5 w-5" />
                   Add to Cart
                </Button>
             </div>
             <Button variant="accent" size="lg" className="w-full h-12" onClick={handleAddToCart}>
                Buy it Now
             </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-8">
             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">Free Shipping</span>
             </div>
             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">1 Year Warranty</span>
             </div>
          </div>

          {/* Specs */}
          {product.specs && (
            <div className="pt-8 space-y-4">
              <h3 className="font-bold text-gray-900 border-b pb-2">Technical Specifications</h3>
              <dl className="grid grid-cols-1 gap-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm border-b border-gray-50 pb-2 last:border-0">
                    <dt className="text-gray-500 font-medium">{key}</dt>
                    <dd className="text-gray-900 font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
