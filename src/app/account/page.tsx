'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { 
  User, 
  ShoppingBag, 
  MapPin, 
  Settings, 
  LogOut, 
  Package, 
  ChevronRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'orders' | 'profile' | 'addresses' | 'payment';

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulated login state
  const [activeTab, setActiveTab] = useState<Tab>('orders');

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-md">
        <div className="bg-white p-8 rounded-2xl border shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Login to Shopry</h1>
            <p className="text-gray-500 text-sm">Access your orders and profile</p>
          </div>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Password</label>
              <input type="password" placeholder="••••••••" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
            <Button className="w-full" onClick={() => setIsLoggedIn(true)}>Sign In</Button>
          </form>
          
          <div className="relative">
             <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
             <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-bold">Or</span></div>
          </div>
          
          <Button variant="outline" className="w-full">Create an Account</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 space-y-2">
          <div className="p-6 bg-primary text-white rounded-2xl mb-6 flex items-center gap-4">
             <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                <User className="h-6 w-6" />
             </div>
             <div>
                <p className="font-bold">Alex Johnson</p>
                <p className="text-xs text-blue-100">Gold Member</p>
             </div>
          </div>
          
          <button 
            onClick={() => setActiveTab('orders')}
            className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors", 
              activeTab === 'orders' ? "bg-gray-100 text-primary" : "text-gray-500 hover:bg-gray-50")}
          >
            <ShoppingBag className="h-5 w-5" /> Orders
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors", 
              activeTab === 'profile' ? "bg-gray-100 text-primary" : "text-gray-500 hover:bg-gray-50")}
          >
            <Settings className="h-5 w-5" /> Profile
          </button>
          <button 
            onClick={() => setActiveTab('addresses')}
            className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors", 
              activeTab === 'addresses' ? "bg-gray-100 text-primary" : "text-gray-500 hover:bg-gray-50")}
          >
            <MapPin className="h-5 w-5" /> Addresses
          </button>
          <button 
            onClick={() => setActiveTab('payment')}
            className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors", 
              activeTab === 'payment' ? "bg-gray-100 text-primary" : "text-gray-500 hover:bg-gray-50")}
          >
            <CreditCard className="h-5 w-5" /> Payment
          </button>
          
          <div className="pt-8 border-t">
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-5 w-5" /> Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8">Order History</h2>
              
              {[102345, 102344].map((id, index) => (
                <div key={id} className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gray-50 px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b">
                    <div className="flex gap-8">
                       <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order Placed</p>
                          <p className="font-bold text-sm">May {11 - index}, 2026</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</p>
                          <p className="font-bold text-sm">${index === 0 ? '64.98' : '24.99'}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order #</p>
                       <p className="font-bold text-sm">SP-{id}</p>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 bg-gray-50 border rounded-lg flex items-center justify-center">
                          <Package className="h-8 w-8 text-gray-200" />
                       </div>
                       <div>
                          <p className="font-bold text-gray-900">{index === 0 ? 'Ultra-Fast 65W GaN Charger' : 'Rugged Armor Phone Case'}</p>
                          <p className="text-sm text-gray-500">{index === 0 ? 'Qty: 1 • Status: Shipped' : 'Qty: 1 • Status: Delivered'}</p>
                       </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                       View Details <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-8 max-w-2xl">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8">Profile Settings</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                    <input type="text" defaultValue="Alex" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                    <input type="text" defaultValue="Johnson" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input type="email" defaultValue="alex@example.com" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                 </div>
              </div>
              
              <div className="pt-6 border-t space-y-6">
                 <h3 className="font-bold text-gray-900 flex items-center gap-2 uppercase tracking-widest text-xs"><ShieldCheck className="h-4 w-4 text-green-600" /> Security</h3>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                 </div>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-400">New Password</label>
                       <input type="password" placeholder="••••••••" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Confirm Password</label>
                       <input type="password" placeholder="••••••••" className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                 </div>
              </div>
              
              <Button size="lg" className="px-12">Save Changes</Button>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8">Saved Addresses</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="border-2 border-primary bg-blue-50 p-6 rounded-2xl relative">
                    <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">DEFAULT</span>
                    <h3 className="font-bold text-gray-900 mb-2">Home</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                       Alex Johnson<br />
                       123 Tech Lane<br />
                       Silicon Valley, CA 94025<br />
                       United States
                    </p>
                    <div className="mt-6 flex gap-4">
                       <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Edit</button>
                       <button className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:underline">Delete</button>
                    </div>
                 </div>
                 
                 <div className="border-2 border-dashed border-gray-200 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 hover:border-primary transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                       <Plus className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-bold text-gray-400 group-hover:text-primary transition-colors">Add New Address</span>
                 </div>
              </div>
            </div>
          )}
          
          {activeTab === 'payment' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8">Payment Methods</h2>
              
              <div className="bg-gray-900 p-8 rounded-2xl text-white max-w-sm relative overflow-hidden">
                 <div className="relative z-10 space-y-8">
                    <div className="flex justify-between items-start">
                       <div className="w-12 h-8 bg-accent/20 rounded border border-white/20" />
                       <CreditCard className="h-8 w-8 opacity-50" />
                    </div>
                    <div>
                       <p className="text-sm opacity-50 font-medium tracking-[0.2em] mb-2 uppercase">Card Number</p>
                       <p className="text-xl font-bold tracking-[0.2em]">•••• •••• •••• 4242</p>
                    </div>
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[10px] opacity-50 font-medium uppercase tracking-widest mb-1">Card Holder</p>
                          <p className="text-sm font-bold uppercase">Alex Johnson</p>
                       </div>
                       <div>
                          <p className="text-[10px] opacity-50 font-medium uppercase tracking-widest mb-1">Expires</p>
                          <p className="text-sm font-bold">12/28</p>
                       </div>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>
              
              <Button variant="outline" className="gap-2">
                 <Plus className="h-4 w-4" /> Add New Card
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  );
}
