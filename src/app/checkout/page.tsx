'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ChevronRight, CreditCard, ShoppingBag, Truck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type Step = 'cart' | 'shipping' | 'payment';

export default function CheckoutPage() {
  const { cart, totalPrice, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState<Step>('cart');
  const router = useRouter();

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    nameOnCard: '',
  });

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      router.push('/checkout/success');
    }, 1000);
  };

  if (cart.length === 0 && step !== 'payment') {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some awesome tech gear before checking out!</p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Checkout</h1>

      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-12 max-w-2xl mx-auto">
        <div className={cn("flex flex-col items-center", step === 'cart' ? "text-primary" : "text-green-600")}>
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 font-bold", 
            step === 'cart' ? "border-primary bg-primary text-white" : "border-green-600 bg-green-600 text-white")}>
            {step === 'cart' ? '1' : <CheckCircle2 className="h-6 w-6" />}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">Cart</span>
        </div>
        <div className={cn("flex-grow h-0.5 mx-4 mb-6", step !== 'cart' ? "bg-green-600" : "bg-gray-200")} />
        <div className={cn("flex flex-col items-center", step === 'shipping' ? "text-primary" : step === 'payment' ? "text-green-600" : "text-gray-400")}>
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 font-bold", 
            step === 'shipping' ? "border-primary bg-primary text-white" : step === 'payment' ? "border-green-600 bg-green-600 text-white" : "border-gray-200")}>
            {step === 'payment' ? <CheckCircle2 className="h-6 w-6" /> : '2'}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">Shipping</span>
        </div>
        <div className={cn("flex-grow h-0.5 mx-4 mb-6", step === 'payment' ? "bg-green-600" : "bg-gray-200")} />
        <div className={cn("flex flex-col items-center", step === 'payment' ? "text-primary" : "text-gray-400")}>
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 font-bold", 
            step === 'payment' ? "border-primary bg-primary text-white" : "border-gray-200")}>
            3
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">Payment</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {step === 'cart' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Review Items</h2>
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="py-6 flex items-center">
                    <div className="h-20 w-20 bg-gray-50 rounded-lg flex items-center justify-center border shrink-0">
                      <ShoppingBag className="h-8 w-8 text-gray-200" />
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500 uppercase tracking-widest text-[10px]">{item.category}</p>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center border rounded-md h-8">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-gray-500 hover:text-primary">-</button>
                          <span className="px-2 font-bold text-sm min-w-[1.5rem] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-gray-500 hover:text-primary">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 text-xs font-bold uppercase">Remove</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-xs text-gray-400">${item.price} each</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end pt-6">
                <Button size="lg" onClick={() => setStep('shipping')} className="gap-2">
                  Shipping Info <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} className="space-y-8">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" /> Shipping Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                  <input required type="text" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={shippingInfo.firstName} onChange={e => setShippingInfo({...shippingInfo, firstName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                  <input required type="text" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={shippingInfo.lastName} onChange={e => setShippingInfo({...shippingInfo, lastName: e.target.value})} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input required type="email" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={shippingInfo.email} onChange={e => setShippingInfo({...shippingInfo, email: e.target.value})} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Address</label>
                  <input required type="text" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={shippingInfo.address} onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">City</label>
                  <input required type="text" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={shippingInfo.city} onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">ZIP / Postal Code</label>
                  <input required type="text" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={shippingInfo.zip} onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})} />
                </div>
              </div>
              <div className="flex justify-between pt-6 border-t">
                <Button variant="ghost" onClick={() => setStep('cart')}>Back to Cart</Button>
                <Button type="submit" size="lg" className="gap-2">
                  Continue to Payment <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-8">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" /> Payment Method
              </h2>
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl space-y-4 mb-8">
                 <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-bold">Shipping to:</span>
                 </div>
                 <p className="text-sm text-blue-900">
                    {shippingInfo.firstName} {shippingInfo.lastName}, {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.zip}
                 </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Card Number</label>
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={paymentInfo.cardNumber} onChange={e => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Expiry (MM/YY)</label>
                    <input required type="text" placeholder="MM/YY" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                      value={paymentInfo.expiry} onChange={e => setPaymentInfo({...paymentInfo, expiry: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">CVC</label>
                    <input required type="text" placeholder="000" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                      value={paymentInfo.cvc} onChange={e => setPaymentInfo({...paymentInfo, cvc: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name on Card</label>
                  <input required type="text" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" 
                    value={paymentInfo.nameOnCard} onChange={e => setPaymentInfo({...paymentInfo, nameOnCard: e.target.value})} />
                </div>
              </div>
              
              <div className="flex justify-between pt-6 border-t">
                <Button variant="ghost" onClick={() => setStep('shipping')}>Back to Shipping</Button>
                <Button type="submit" variant="accent" size="lg" className="w-full md:w-auto px-12 h-14 text-lg">
                  Complete Order — ${totalPrice.toFixed(2)}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border">
            <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-tight">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Items ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
            </div>
            <div className="border-t pt-6 flex justify-between items-end mb-8">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-3xl font-black text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="space-y-4 bg-white p-4 rounded-xl border border-blue-100">
               <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Secure Checkout
               </div>
               <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> 1-Year Warranty
               </div>
               <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> 24/7 Tech Support
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
