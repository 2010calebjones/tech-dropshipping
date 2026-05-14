export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Shopry
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your premium outlet for tech accessories. Trustworthy gear, fast shipping, and expert support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/products" className="hover:text-accent transition-colors">All Products</a></li>
              <li><a href="/categories/chargers" className="hover:text-accent transition-colors">Fast Chargers</a></li>
              <li><a href="/categories/cases" className="hover:text-accent transition-colors">Phone Cases</a></li>
              <li><a href="/categories/gadgets" className="hover:text-accent transition-colors">Tech Gadgets</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/shipping" className="hover:text-accent transition-colors">Shipping Policy</a></li>
              <li><a href="/returns" className="hover:text-accent transition-colors">Returns & Refunds</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact Expert</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-sm mb-4">Get tech news and exclusive outlet deals.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-primary text-white px-3 py-2 rounded text-sm font-bold hover:bg-primary/90 transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
          <p>&copy; {currentYear} Shopry Outlet. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
