'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CartDrawer } from '@/components/CartDrawer';
import { useState } from 'react';

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary">
                Shopry
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link href="/products" className="text-gray-600 hover:text-primary transition-colors">
              All Products
            </Link>
            <Link href="/categories/chargers" className="text-gray-600 hover:text-primary transition-colors">
              Chargers
            </Link>
            <Link href="/categories/cases" className="text-gray-600 hover:text-primary transition-colors">
              Cases
            </Link>
            <Link href="/categories/gadgets" className="text-gray-600 hover:text-primary transition-colors">
              Gadgets
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search tech..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <button 
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
            
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="/products" onClick={() => setMobileMenuOpen(false)}>All Products</Link>
              <Link href="/categories/chargers" onClick={() => setMobileMenuOpen(false)}>Chargers</Link>
              <Link href="/categories/cases" onClick={() => setMobileMenuOpen(false)}>Cases</Link>
              <Link href="/categories/gadgets" onClick={() => setMobileMenuOpen(false)}>Gadgets</Link>
            </nav>
            <div className="relative pt-2">
              <input
                type="text"
                placeholder="Search tech..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute left-3 top-4.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
