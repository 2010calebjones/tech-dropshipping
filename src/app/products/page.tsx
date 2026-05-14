import { theme } from "@/lib/theme";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Search, Filter, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Tech Catalog</h1>
          <p className="text-gray-500 mt-1 font-medium">Showing {PRODUCTS.length} curated essentials</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full md:w-64"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>

          <Button variant="outline" className="gap-2 h-11">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
          </Button>

          <Button variant="outline" className="gap-2 h-11">
            <span className="hidden sm:inline">Sort:</span> Trending
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State / Pagination Placeholder */}
      <div className="mt-20 text-center border-t border-gray-100 pt-16">
        <p className="text-gray-400 font-medium">You've reached the end of our current collection.</p>
        <p className="text-gray-400 text-sm mt-1">Check back soon for more high-quality tech gear.</p>
        <Button variant="primary" className="mt-8 px-8">
          Back to Top
        </Button>
      </div>
    </div>
  );
}
