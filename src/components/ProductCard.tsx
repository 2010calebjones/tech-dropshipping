'use client';

import Link from 'next/link';
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
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="block relative h-56 w-full bg-gray-50 overflow-hidden">
        {/* Placeholder for real images */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
           <span className="text-xs uppercase tracking-widest font-bold">Image Preview</span>
        </div>
        {product.trending && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded shadow-sm">
            TRENDING
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-500 uppercase font-semibold">{product.category}</p>
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs font-bold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <Button 
            size="sm" 
            className="rounded-full w-9 h-9 p-0"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
