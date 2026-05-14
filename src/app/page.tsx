import Link from 'next/link';
import { Smartphone, Zap, ShieldCheck, Truck, ArrowRight, ChevronRight, Tag, Percent, TruckIcon, HeadphonesIcon } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const trendingProducts = PRODUCTS.filter(p => p.trending).slice(0, 4);
  const dealProducts = PRODUCTS.filter(p => p.originalPrice).slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#004f9f] to-[#0071CE] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="container py-12 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation="fadeLeft" className="space-y-6 text-white">
              <div className="inline-flex items-center gap-2 bg-accent text-primary px-3 py-1.5 rounded-full text-sm font-bold animate-pulse">
                <Zap className="h-4 w-4" />
                Flash Sale! Up to 50% Off
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Premium Tech at <span className="text-accent">Outlet Prices</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                Upgrade your gear without breaking the bank. Free shipping on orders over $50.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button variant="accent" size="lg" className="font-bold hover:scale-105 transition-transform">
                    Shop Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/deals">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold">
                    View All Deals
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" className="relative hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-float">
                  <Smartphone className="w-40 h-40 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-primary p-3 rounded-xl shadow-lg animate-bounce-in">
                  <Zap className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-primary p-3 rounded-xl shadow-lg animate-bounce-in delay-300">
                  <ShieldCheck className="h-8 w-8" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Value Props Bar */}
      <AnimatedSection animation="fadeUp">
        <section className="bg-white border-b shadow-sm">
          <div className="container py-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Truck, title: 'Free Shipping', subtitle: 'Orders over $50', color: 'bg-primary/10' },
                { icon: ShieldCheck, title: '1 Year Warranty', subtitle: 'Quality Guaranteed', color: 'bg-primary/10' },
                { icon: Zap, title: 'Fast Delivery', subtitle: 'Ships in 24h', color: 'bg-primary/10' },
                { icon: HeadphonesIcon, title: '24/7 Support', subtitle: 'Expert Help', color: 'bg-primary/10' },
              ].map((item, i) => (
                <AnimatedSection key={item.title} animation="scaleIn" delay={i * 100}>
                  <div className="flex items-center gap-3 hover-lift p-2 rounded-lg transition-all cursor-default">
                    <div className={`${item.color} p-2 rounded-full`}>
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Deals Section */}
      <AnimatedSection animation="fadeUp">
        <section className="bg-gradient-to-b from-orange-50 to-white py-10">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-red-500 text-white p-2 rounded-lg animate-pulse">
                  <Percent className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900"> Deals of the Day</h2>
                  <p className="text-sm text-gray-500">Limited time offers</p>
                </div>
              </div>
              <Link href="/deals" className="text-primary font-bold hover:underline flex items-center gap-1 hover:translate-x-1 transition-transform">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dealProducts.map((product, i) => (
                <AnimatedSection key={product.id} animation="fadeUp" delay={i * 100}>
                  <div className="hover-lift">
                    <ProductCard product={product} />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trending Products */}
      <AnimatedSection animation="fadeUp">
        <section className="container py-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900">Trending Now</h2>
                <p className="text-sm text-gray-500">What everyone's buying</p>
              </div>
            </div>
            <Link href="/products" className="text-primary font-bold hover:underline flex items-center gap-1 hover:translate-x-1 transition-transform">
              Shop All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingProducts.map((product, i) => (
              <AnimatedSection key={product.id} animation="fadeUp" delay={i * 100}>
                <div className="hover-lift">
                  <ProductCard product={product} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Category Grid */}
      <AnimatedSection animation="fadeUp">
        <section className="bg-gray-50 py-10">
          <div className="container">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Chargers', icon: Zap, color: 'bg-blue-500' },
                { name: 'Cases', icon: Smartphone, color: 'bg-purple-500' },
                { name: 'Cables', icon: Tag, color: 'bg-green-500' },
                { name: 'Audio', icon: HeadphonesIcon, color: 'bg-orange-500' },
                { name: 'Wearables', icon: ShieldCheck, color: 'bg-pink-500' },
                { name: 'Gadgets', icon: TruckIcon, color: 'bg-teal-500' },
              ].map((cat, i) => (
                <AnimatedSection key={cat.name} animation="scaleIn" delay={i * 50}>
                  <Link 
                    href={`/categories/${cat.name.toLowerCase()}`}
                    className="group bg-white rounded-xl p-4 text-center shadow-sm border hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover-lift"
                  >
                    <div className={`${cat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <cat.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">{cat.name}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection animation="fadeUp">
        <section className="bg-gradient-to-r from-[#004f9f] to-[#0071CE] py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-center md:text-left">
                <h2 className="text-3xl font-black animate-pulse">Join 50,000+ Tech Lovers</h2>
                <p className="text-blue-100 mt-2">Get 10% off your first order + exclusive deals</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg text-sm flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-accent hover:scale-105 transition-transform"
                />
                <Button variant="accent" size="lg" className="font-bold whitespace-nowrap hover:scale-105 transition-transform">
                  Get 10% Off
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
