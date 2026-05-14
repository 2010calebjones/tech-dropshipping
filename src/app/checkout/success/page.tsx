'use client';

import { CheckCircle2, Package, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SuccessPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">
        Order Confirmed!
      </h1>
      
      <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
        Thank you for choosing Shopry! Your premium tech accessories are being prepared for dispatch.
      </p>

      <div className="bg-gray-50 border rounded-2xl p-8 mb-12 max-w-md w-full">
        <div className="flex justify-between items-center mb-4 border-b pb-4">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Order Number</span>
          <span className="font-black text-gray-900 text-lg">#{orderNumber}</span>
        </div>
        <div className="flex items-center gap-4 text-left">
           <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Package className="h-6 w-6 text-primary" />
           </div>
           <div>
              <p className="font-bold text-gray-900">Estimated Delivery</p>
              <p className="text-sm text-gray-500">3-5 Business Days</p>
           </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link href="/products">
            Continue Shopping <ShoppingBag className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/account">
            View Order Status <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="mt-16 text-gray-400 text-xs font-medium uppercase tracking-[0.2em]">
         Trust Shopry • Premium Tech Outlet
      </div>
    </div>
  );
}
