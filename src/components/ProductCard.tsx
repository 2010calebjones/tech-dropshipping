'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { Button } from './ui/Button';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="block relative h-56 w-full bg-gray-50 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <span className="text-xs uppercase tracking-widest font-bold">Image Preview</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.trending && (
            <span className="bg-accent text-primary text-[10px] font-bold px-2 py-1 rounded shadow-sm animate-bounce-in">
              TRENDING
            </span>
          )}
        </div>
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10 animate-pulse">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-primary uppercase font-semibold tracking-wide">{product.category}</p>
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors text-sm leading-tight">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 transition-colors duration-200 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'fill-gray-200 text-gray-200'}`} 
            />
          ))}
          <span className="text-xs font-bold text-gray-700 ml-1">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews?.toLocaleString()})</span>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-gray-900 group-hover:text-primary transition-colors">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <Button 
            size="sm" 
            className="rounded-full w-9 h-9 p-0 bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
