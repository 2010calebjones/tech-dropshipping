'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

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
              {/* Facebook */}
              <a href="https://facebook.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
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
