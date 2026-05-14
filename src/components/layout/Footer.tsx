'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter signup */}
      <div className="bg-primary text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Save time, money & stay connected</h3>
              <p className="text-sm opacity-80">Sign up for Shopry emails for exclusive deals and updates</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg text-gray-900 text-sm flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-primary font-bold px-6 py-2.5 rounded-lg hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Column 1 - About */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">ABOUT SHOPRY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Stories</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 2 - Customer Service */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/track" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Column 3 - Departments */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">DEPARTMENTS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/chargers" className="hover:text-white transition-colors">Chargers & Adapters</Link></li>
              <li><Link href="/categories/cases" className="hover:text-white transition-colors">Phone Cases</Link></li>
              <li><Link href="/categories/cables" className="hover:text-white transition-colors">Cables & Audio</Link></li>
              <li><Link href="/categories/wearables" className="hover:text-white transition-colors">Wearables</Link></li>
              <li><Link href="/categories/gadgets" className="hover:text-white transition-colors">Gadgets</Link></li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">CONNECT WITH US</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://facebook.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-SHOPRY</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@shopry.com</span>
              </div>
            </div>
          </div>

          {/* Column 5 - App promo */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-white font-bold text-sm mb-4">GET THE APP</h4>
            <div className="space-y-2">
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-accent rounded-lg p-1 flex items-center justify-center">
                <span className="text-primary font-black text-lg italic">S</span>
              </div>
              <span className="text-white font-black text-lg">Shopry</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white">Terms of Use</Link>
              <span>|</span>
              <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
              <span>|</span>
              <Link href="/cookies" className="hover:text-white">Cookie Settings</Link>
            </div>
            <p>© 2025 Shopry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
