import Link from 'next/link';
import { Smartphone, Zap, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const trendingProducts = PRODUCTS.filter(p => p.trending);

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Premium Tech Accessories at <span className="text-accent">Outlet Prices</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50 opacity-90 max-w-lg">
              Upgrade your gear with trust. From fast chargers to rugged cases, we curate only the best for your devices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/products">Shop Trending Tech</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/deals">Weekly Deals</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center relative">
             <div className="w-80 h-96 bg-accent/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Smartphone className="w-48 h-48 text-accent opacity-80" />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl text-primary flex items-center gap-3">
                   <Zap className="h-8 w-8 fill-accent text-accent" />
                   <div>
                      <p className="font-bold text-sm text-gray-900">Fast Charging</p>
                      <p className="text-xs text-gray-500">Up to 100W PD</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 border-r border-gray-200 last:border-0 pr-4">
              <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm text-gray-900">Quality Guaranteed</p>
                <p className="text-xs text-gray-500">1-Year Warranty</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-r border-gray-200 last:border-0 pr-4">
              <Truck className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-500">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-r border-gray-200 last:border-0 pr-4">
               <Zap className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm text-gray-900">Fast Delivery</p>
                <p className="text-xs text-gray-500">Ships within 24h</p>
              </div>
            </div>
            <div className="flex items-center gap-4 last:border-0">
              <Smartphone className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm text-gray-900">Tech Support</p>
                <p className="text-xs text-gray-500">Expert help 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-600 font-medium">The tech accessories everyone is talking about.</p>
          </div>
          <Link href="/products" className="text-primary font-bold hover:underline flex items-center gap-1">
            Browse All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Chargers', 'Cases', 'Audio', 'Gadgets'].map((cat) => (
              <Link 
                key={cat} 
                href={`/categories/${cat.toLowerCase()}`}
                className="group relative h-48 overflow-hidden rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Smartphone className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {cat}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 mt-16">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Never run out of power again.</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Join 50,000+ tech lovers who trust Shopry for their essential accessories.
              Get 10% off your first order when you sign up.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto pt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent flex-grow text-white"
              />
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Join Now
              </Button>
            </div>
            <p className="text-xs text-gray-500 italic">No spam, just tech. Unsubscribe anytime.</p>
          </div>
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>
    </div>
  );
}
