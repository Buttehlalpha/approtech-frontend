export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  farmer: string;
  farmerId: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  organic: boolean;
  description: string;
  inStock: boolean;
}

export interface Farmer {
  id: string;
  name: string;
  location: string;
  specialties: string[];
  rating: number;
  totalSales: number;
  memberSince: string;
  bio: string;
  avatar: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = [
  { id: "vegetables", name: "Vegetables", icon: "🥬", count: 45 },
  { id: "fruits", name: "Fruits", icon: "🍎", count: 32 },
  { id: "grains", name: "Grains & Cereals", icon: "🌾", count: 18 },
  { id: "dairy", name: "Dairy & Eggs", icon: "🥚", count: 24 },
  { id: "herbs", name: "Herbs & Spices", icon: "🌿", count: 15 },
  { id: "tubers", name: "Tubers & Roots", icon: "🥔", count: 12 },
];

export const products: Product[] = [
  {
    id: "1", name: "Fresh Organic Tomatoes", price: 3.50, unit: "kg",
    category: "vegetables", farmer: "Amara Osei", farmerId: "f1",
    location: "Accra Region", rating: 4.8, reviews: 124,
    image: "/placeholder.svg", organic: true, inStock: true,
    description: "Vine-ripened organic tomatoes grown with care. Perfect for salads, sauces, and cooking.",
  },
  {
    id: "2", name: "Sweet Yellow Corn", price: 2.00, unit: "dozen",
    category: "grains", farmer: "Kwame Mensah", farmerId: "f2",
    location: "Kumasi", rating: 4.6, reviews: 89,
    image: "/placeholder.svg", organic: false, inStock: true,
    description: "Freshly harvested sweet corn, perfect for grilling or boiling.",
  },
  {
    id: "3", name: "Organic Spinach Bundle", price: 1.80, unit: "bundle",
    category: "vegetables", farmer: "Amara Osei", farmerId: "f1",
    location: "Accra Region", rating: 4.9, reviews: 156,
    image: "/placeholder.svg", organic: true, inStock: true,
    description: "Crisp, dark green spinach leaves packed with nutrients.",
  },
  {
    id: "4", name: "Fresh Pineapples", price: 4.00, unit: "piece",
    category: "fruits", farmer: "Esi Adjei", farmerId: "f3",
    location: "Cape Coast", rating: 4.7, reviews: 67,
    image: "/placeholder.svg", organic: true, inStock: true,
    description: "Juicy tropical pineapples, harvested at peak sweetness.",
  },
  {
    id: "5", name: "Farm Fresh Eggs", price: 5.50, unit: "tray (30)",
    category: "dairy", farmer: "Kofi Asante", farmerId: "f4",
    location: "Tamale", rating: 4.5, reviews: 203,
    image: "/placeholder.svg", organic: false, inStock: true,
    description: "Free-range eggs from healthy, well-fed hens.",
  },
  {
    id: "6", name: "Fresh Ginger Root", price: 6.00, unit: "kg",
    category: "herbs", farmer: "Ama Darko", farmerId: "f5",
    location: "Eastern Region", rating: 4.8, reviews: 78,
    image: "/placeholder.svg", organic: true, inStock: true,
    description: "Aromatic ginger root, perfect for cooking and medicinal use.",
  },
  {
    id: "7", name: "Cassava Tubers", price: 2.50, unit: "kg",
    category: "tubers", farmer: "Kwame Mensah", farmerId: "f2",
    location: "Kumasi", rating: 4.4, reviews: 95,
    image: "/placeholder.svg", organic: false, inStock: true,
    description: "Fresh cassava tubers, a staple for fufu and other dishes.",
  },
  {
    id: "8", name: "Organic Mangoes", price: 5.00, unit: "kg",
    category: "fruits", farmer: "Esi Adjei", farmerId: "f3",
    location: "Cape Coast", rating: 4.9, reviews: 142,
    image: "/placeholder.svg", organic: true, inStock: false,
    description: "Sweet, sun-ripened organic mangoes with rich flavor.",
  },
];

export const farmers: Farmer[] = [
  {
    id: "f1", name: "Amara Osei", location: "Accra Region",
    specialties: ["Vegetables", "Herbs"], rating: 4.8, totalSales: 1250,
    memberSince: "2022", bio: "Third-generation farmer specializing in organic vegetables.",
    avatar: "/placeholder.svg", verified: true,
  },
  {
    id: "f2", name: "Kwame Mensah", location: "Kumasi",
    specialties: ["Grains", "Tubers"], rating: 4.6, totalSales: 890,
    memberSince: "2023", bio: "Passionate about sustainable grain farming.",
    avatar: "/placeholder.svg", verified: true,
  },
  {
    id: "f3", name: "Esi Adjei", location: "Cape Coast",
    specialties: ["Fruits"], rating: 4.8, totalSales: 1100,
    memberSince: "2021", bio: "Tropical fruit specialist with award-winning produce.",
    avatar: "/placeholder.svg", verified: true,
  },
  {
    id: "f4", name: "Kofi Asante", location: "Tamale",
    specialties: ["Dairy", "Poultry"], rating: 4.5, totalSales: 2100,
    memberSince: "2020", bio: "Free-range poultry farmer committed to animal welfare.",
    avatar: "/placeholder.svg", verified: false,
  },
  {
    id: "f5", name: "Ama Darko", location: "Eastern Region",
    specialties: ["Herbs", "Spices"], rating: 4.8, totalSales: 670,
    memberSince: "2023", bio: "Herbalist and farmer growing medicinal and culinary herbs.",
    avatar: "/placeholder.svg", verified: true,
  },
];
