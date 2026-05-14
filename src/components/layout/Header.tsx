'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-[#004f9f] text-white text-xs py-1.5">
        <div className="container">
          <div className="flex justify-between items-center">
            <span>🚚 Free shipping on orders over $50</span>
            <div className="flex gap-4">
              <Link href="/account" className="hover:underline">Account</Link>
              <span>|</span>
              <Link href="/help" className="hover:underline">Help</Link>
              <span>|</span>
              <Link href="/track" className="hover:underline">Track Order</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-accent rounded-lg p-1.5 flex items-center justify-center">
              <span className="text-primary font-black text-xl italic">S</span>
            </div>
            <span className="text-white font-black text-2xl tracking-tight">Shopry</span>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tech products..."
                className="w-full py-2.5 px-4 pr-12 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-accent hover:bg-accent/90 rounded-r-lg transition-colors">
                <Search className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/account" className="hidden md:flex items-center gap-2 text-white hover:text-accent transition-colors">
              <User className="h-5 w-5" />
              <div className="text-xs">
                <p className="opacity-70">Sign In</p>
                <p className="font-semibold">Account</p>
              </div>
            </Link>

            <Link href="/checkout" className="relative text-white hover:text-accent transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        <div className="mt-2 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-[#005ea6] hidden lg:block">
        <div className="container">
          <div className="flex items-center gap-6 text-sm text-white py-2">
            <Link href="/products" className="hover:text-accent transition-colors font-medium">All Products</Link>
            <Link href="/categories/chargers" className="hover:text-accent transition-colors">Chargers</Link>
            <Link href="/categories/cases" className="hover:text-accent transition-colors">Cases & Protection</Link>
            <Link href="/categories/cables" className="hover:text-accent transition-colors">Cables</Link>
            <Link href="/categories/wearables" className="hover:text-accent transition-colors">Wearables</Link>
            <Link href="/categories/gadgets" className="hover:text-accent transition-colors">Gadgets</Link>
            <Link href="/deals" className="text-accent font-bold hover:text-accent/80 transition-colors">🔥 Deals</Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#005ea6] p-4 space-y-2">
          <Link href="/products" className="block text-white py-2 hover:text-accent">All Products</Link>
          <Link href="/categories/chargers" className="block text-white py-2 hover:text-accent">Chargers</Link>
          <Link href="/categories/cases" className="block text-white py-2 hover:text-accent">Cases</Link>
          <Link href="/categories/cables" className="block text-white py-2 hover:text-accent">Cables</Link>
          <Link href="/deals" className="block text-accent font-bold py-2">🔥 Deals</Link>
          <hr className="border-white/20 my-2" />
          <Link href="/account" className="block text-white py-2 hover:text-accent">Account</Link>
          <Link href="/help" className="block text-white py-2 hover:text-accent">Help</Link>
        </div>
      )}
    </header>
  );
}
