export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  aliExpressUrl?: string;
  rating: number;
  reviews: number;
  specs?: Record<string, string>;
  stock: number;
  trending?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
