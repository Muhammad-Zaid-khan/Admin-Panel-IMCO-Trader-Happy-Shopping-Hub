import logo from "./logo.png";
import HomeBannerOne from "./Home_Banner_1.jpg";
import HomeBannerTwo from "./Home_Banner_2.jpg";
import HomeBannerThree from "./Home_Banner_3.jpg";
import HomeBannerFour from "./Home_Banner_4.jpg";
import HomeBannerFive from "./Home_Banner_5.jpg";
import HomeBannerSix from "./Home_Banner_6.jpg";
import MiniLogo from "./Short_logo.png";
import MainSideBanner1 from './Side_Banner_1.jpg'
import MainSideBanner2 from './Side_Banner_2.jpg'
import MainSideBanner3 from './Side_Banner_3.jpg'
import MainSideBanner4 from './Side_Banner_4.jpg'
import MainSideBanner5 from './Side_Banner_5.jpg'
import MainSideBanner6 from './Side_Banner_6.jpg'
import Button1 from './Button_1.jpg'
import Button2 from './Button_2.jpg'
import Button3 from './Button_3.jpg'
import Button4 from './Button_4.jpg'

// Product Images - Add your actual product images here
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";
import product8 from "./product8.jpg";
import product9 from "./product9.jpg";
import product10 from "./product10.jpg";
import product11 from "./product11.jpg";
import product12 from "./product12.jpg";
import product13 from "./product13.jpg";
import product14 from "./product14.jpg";
import product15 from "./product15.jpg";
import product16 from "./product16.jpg";
import product17 from "./product17.jpg";
import product18 from "./product18.jpg";
import product19 from "./product19.jpg";
import product20 from "./product20.jpg";
import product21 from "./product21.jpg";
import product22 from "./product22.jpg";
import product23 from "./product23.jpg";
import product24 from "./product24.jpg";
import product25 from "./product25.jpg";
import product26 from "./product26.jpg";
import product27 from "./product27.jpg";
import product28 from "./product28.jpg";
import product29 from "./product29.jpg";
import product30 from "./product30.jpg";
import product31 from "./product31.jpg";
import product32 from "./product32.jpg";
import product33 from "./product33.jpg";
import product34 from "./product34.jpg";
import product35 from "./product35.jpg";
import product36 from "./product36.jpg";

export const assets = {
  logo,
  HomeBannerOne,
  HomeBannerTwo,
  HomeBannerThree,
  HomeBannerFour,
  HomeBannerFive,
  HomeBannerSix,
  MiniLogo,
  MainSideBanner1,
  MainSideBanner2,
  MainSideBanner3,
  MainSideBanner4,
  MainSideBanner5,
  MainSideBanner6,
  Button1,
  Button2,
  Button3,
  Button4
};

// Categories Assets - Consolidated and Exported
export const categories = [
  {
    id: 'home',
    name: 'Home & Living',
    icon: '🏡',
    emoji: '🏡',
    subcategories: [
      'Modern Furniture',
      'Home Decor',
      'Kitchen & Dining',
      'Bedding & Bath',
      'Smart Home',
      'Storage Solutions'
    ],
    featured: false,
    description: 'Transform your living space with modern furniture and home essentials'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '👗',
    emoji: '👗',
    subcategories: [
      'Men\'s Fashion',
      'Women\'s Fashion',
      'Kids Fashion',
      'Accessories',
      'Luxury Watches',
      'Designer Sunglasses'
    ],
    featured: true,
    description: 'Discover the latest trends in fashion and luxury accessories'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '📱',
    emoji: '📱',
    subcategories: [
      'Smartphones',
      'Laptops & Computers',
      'Tablets & E-readers',
      'Audio & Headphones',
      'Cameras & Photography',
      'Gaming Consoles'
    ],
    featured: true,
    description: 'Latest technology and electronic devices for modern living'
  },
  {
    id: 'bags',
    name: 'Bags & Luggage',
    icon: '👜',
    emoji: '👜',
    subcategories: [
      'Designer Handbags',
      'Travel Backpacks',
      'Luxury Luggage',
      'Laptop & Work Bags',
      'Wallets & Purses',
      'Evening Clutches'
    ],
    featured: false,
    description: 'Premium bags and luggage for every occasion'
  },
  {
    id: 'footwear',
    name: 'Footwear',
    icon: '👟',
    emoji: '👟',
    subcategories: [
      'Men\'s Shoes',
      'Women\'s Shoes',
      'Kids Footwear',
      'Athletic & Sports',
      'Formal & Business',
      'Casual & Lifestyle'
    ],
    featured: false,
    description: 'Step out in style with our premium footwear collection'
  },
  {
    id: 'groceries',
    name: 'Groceries',
    icon: '🛒',
    emoji: '🛒',
    subcategories: [
      'Fresh Produce',
      'Organic Foods',
      'Beverages & Drinks',
      'Snacks & Treats',
      'Frozen & Ready Meals',
      'Household Essentials'
    ],
    featured: false,
    description: 'Fresh groceries and household essentials delivered to your door'
  },
  {
    id: 'beauty',
    name: 'Beauty & Care',
    icon: '💄',
    emoji: '💄',
    subcategories: [
      'Premium Skincare',
      'Makeup & Cosmetics',
      'Hair Care & Styling',
      'Luxury Fragrances',
      'Beauty Tools',
      'Men\'s Grooming'
    ],
    featured: true,
    description: 'Premium beauty products and personal care essentials'
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    icon: '🏥',
    emoji: '🏥',
    subcategories: [
      'Vitamins & Supplements',
      'Fitness Equipment',
      'Personal Care',
      'Health Monitors',
      'Natural & Organic',
      'Medical Supplies'
    ],
    featured: false,
    description: 'Health and wellness products for a better lifestyle'
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Watches',
    icon: '💎',
    emoji: '💎',
    subcategories: [
      'Diamond Jewelry',
      'Gold & Silver',
      'Fashion Jewelry',
      'Luxury Watches',
      'Wedding Rings',
      'Precious Gemstones'
    ],
    featured: true,
    description: 'Exquisite jewelry and luxury timepieces'
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    icon: '⚽',
    emoji: '⚽',
    subcategories: [
      'Fitness & Gym',
      'Outdoor Adventure',
      'Team Sports',
      'Water Sports',
      'Winter Sports',
      'Sports Equipment'
    ],
    featured: false,
    description: 'Sports equipment and outdoor gear for active lifestyles'
  },
  {
    id: 'books',
    name: 'Books & Media',
    icon: '📚',
    emoji: '📚',
    subcategories: [
      'Bestseller Books',
      'Digital E-books',
      'Magazines',
      'Music & Vinyl',
      'Movies & TV',
      'Video Games'
    ],
    featured: false,
    description: 'Books, media, and entertainment for every interest'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: '🚗',
    emoji: '🚗',
    subcategories: [
      'Car Accessories',
      'Motorcycle Gear',
      'Auto Tools',
      'Car Care Products',
      'Electronics & GPS',
      'Replacement Parts'
    ],
    featured: false,
    description: 'Automotive accessories and maintenance products'
  }
];

// Products Data - Sample products for each category
export const products = [
  // Home & Living Products
  {
    _id: 'prod1',
    name: 'Modern Sofa Set',
    image: product1,
    category: 'home',
    subcategory: 'Modern Furniture',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    rating: 4.8,
    reviews: 245,
    inStock: true,
    description: 'Comfortable and stylish modern sofa set perfect for contemporary living rooms. Made with premium materials and ergonomic design.',
    brand: 'LuxeHome',
    colors: ['Gray', 'Navy', 'Beige'],
    sizes: ['3-Seater', '2-Seater'],
    featured: true
  },
  {
    _id: 'prod2',
    name: 'Smart Home Security System',
    image: product2,
    category: 'home',
    subcategory: 'Smart Home',
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.6,
    reviews: 189,
    inStock: true,
    description: 'Complete smart home security system with cameras, sensors, and mobile app control.',
    brand: 'SecureHome',
    colors: ['White', 'Black'],
    sizes: ['Standard'],
    featured: false
  },
  {
    _id: 'prod3',
    name: 'Premium Kitchen Knife Set',
    image: product3,
    category: 'home',
    subcategory: 'Kitchen & Dining',
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.9,
    reviews: 312,
    inStock: true,
    description: 'Professional-grade kitchen knife set with wooden block. Perfect for home chefs.',
    brand: 'ChefMaster',
    colors: ['Natural Wood'],
    sizes: ['8-Piece Set'],
    featured: true
  },

  // Fashion Products
  {
    _id: 'prod4',
    name: 'Designer Silk Dress',
    image: product4,
    category: 'fashion',
    subcategory: 'Women\'s Fashion',
    price: 199,
    originalPrice: 299,
    discount: 33,
    rating: 4.7,
    reviews: 156,
    inStock: true,
    description: 'Elegant silk dress perfect for special occasions. Features premium silk fabric and modern cut.',
    brand: 'Elegance',
    colors: ['Black', 'Navy', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true
  },
  {
    _id: 'prod5',
    name: 'Men\'s Casual Blazer',
    image: product5,
    category: 'fashion',
    subcategory: 'Men\'s Fashion',
    price: 129,
    originalPrice: 179,
    discount: 28,
    rating: 4.5,
    reviews: 98,
    inStock: true,
    description: 'Versatile casual blazer that transitions from office to evening wear effortlessly.',
    brand: 'Gentleman',
    colors: ['Navy', 'Gray', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: false
  },
  {
    _id: 'prod6',
    name: 'Luxury Watch',
    image: product6,
    category: 'fashion',
    subcategory: 'Luxury Watches',
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.9,
    reviews: 78,
    inStock: true,
    description: 'Swiss-made luxury timepiece with automatic movement and sapphire crystal.',
    brand: 'Chronos',
    colors: ['Silver', 'Gold', 'Rose Gold'],
    sizes: ['42mm'],
    featured: true
  },

  // Electronics Products
  {
    _id: 'prod7',
    name: 'Latest Smartphone',
    image: product7,
    category: 'electronics',
    subcategory: 'Smartphones',
    price: 899,
    originalPrice: 999,
    discount: 10,
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    description: 'Latest flagship smartphone with advanced camera system and all-day battery life.',
    brand: 'TechPro',
    colors: ['Black', 'White', 'Blue'],
    sizes: ['128GB', '256GB', '512GB'],
    featured: true
  },
  {
    _id: 'prod8',
    name: 'Gaming Laptop',
    image: product8,
    category: 'electronics',
    subcategory: 'Laptops & Computers',
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    rating: 4.7,
    reviews: 289,
    inStock: true,
    description: 'High-performance gaming laptop with latest graphics card and fast refresh rate display.',
    brand: 'GameMax',
    colors: ['Black'],
    sizes: ['15.6"', '17.3"'],
    featured: true
  },
  {
    _id: 'prod9',
    name: 'Wireless Headphones',
    image: product9,
    category: 'electronics',
    subcategory: 'Audio & Headphones',
    price: 249,
    originalPrice: 299,
    discount: 17,
    rating: 4.6,
    reviews: 456,
    inStock: true,
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
    brand: 'AudioMax',
    colors: ['Black', 'White', 'Silver'],
    sizes: ['Standard'],
    featured: false
  },

  // Bags & Luggage Products
  {
    _id: 'prod10',
    name: 'Designer Handbag',
    image: product10,
    category: 'bags',
    subcategory: 'Designer Handbags',
    price: 399,
    originalPrice: 599,
    discount: 33,
    rating: 4.8,
    reviews: 167,
    inStock: true,
    description: 'Luxury leather handbag with premium craftsmanship and timeless design.',
    brand: 'LuxeBag',
    colors: ['Black', 'Brown', 'Beige'],
    sizes: ['Medium', 'Large'],
    featured: true
  },
  {
    _id: 'prod11',
    name: 'Travel Backpack',
    image: product11,
    category: 'bags',
    subcategory: 'Travel Backpacks',
    price: 89,
    originalPrice: 129,
    discount: 31,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    description: 'Durable travel backpack with multiple compartments and ergonomic design.',
    brand: 'Wanderer',
    colors: ['Black', 'Gray', 'Olive'],
    sizes: ['30L', '40L', '50L'],
    featured: false
  },
  {
    _id: 'prod12',
    name: 'Luxury Luggage Set',
    image: product12,
    category: 'bags',
    subcategory: 'Luxury Luggage',
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    description: 'Premium hardshell luggage set with TSA locks and 360-degree wheels.',
    brand: 'TravelLux',
    colors: ['Silver', 'Rose Gold', 'Black'],
    sizes: ['3-Piece Set'],
    featured: true
  },

  // Footwear Products
  {
    _id: 'prod13',
    name: 'Running Shoes',
    image: product13,
    category: 'footwear',
    subcategory: 'Athletic & Sports',
    price: 129,
    originalPrice: 159,
    discount: 19,
    rating: 4.7,
    reviews: 567,
    inStock: true,
    description: 'High-performance running shoes with advanced cushioning and breathable mesh.',
    brand: 'RunMax',
    colors: ['Black/White', 'Blue/Gray', 'Red/Black'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    featured: true
  },
  {
    _id: 'prod14',
    name: 'Formal Leather Shoes',
    image: product14,
    category: 'footwear',
    subcategory: 'Formal & Business',
    price: 189,
    originalPrice: 249,
    discount: 24,
    rating: 4.6,
    reviews: 145,
    inStock: true,
    description: 'Elegant leather dress shoes perfect for business and formal occasions.',
    brand: 'Executive',
    colors: ['Black', 'Brown'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    featured: false
  },
  {
    _id: 'prod15',
    name: 'Women\'s Heels',
    image: product15,
    category: 'footwear',
    subcategory: 'Women\'s Shoes',
    price: 99,
    originalPrice: 139,
    discount: 29,
    rating: 4.4,
    reviews: 203,
    inStock: true,
    description: 'Stylish high heels with comfortable padding and elegant design.',
    brand: 'Glamour',
    colors: ['Black', 'Nude', 'Red'],
    sizes: ['6', '7', '8', '9', '10'],
    featured: false
  },

  // Groceries Products
  {
    _id: 'prod16',
    name: 'Organic Fruit Basket',
    image: product16,
    category: 'groceries',
    subcategory: 'Fresh Produce',
    price: 29,
    originalPrice: 39,
    discount: 26,
    rating: 4.8,
    reviews: 445,
    inStock: true,
    description: 'Fresh organic fruits delivered daily. Perfect for healthy snacking.',
    brand: 'FreshOrganics',
    colors: ['Mixed'],
    sizes: ['Small', 'Medium', 'Large'],
    featured: true
  },
  {
    _id: 'prod17',
    name: 'Premium Coffee Beans',
    image: product17,
    category: 'groceries',
    subcategory: 'Beverages & Drinks',
    price: 24,
    originalPrice: 32,
    discount: 25,
    rating: 4.9,
    reviews: 678,
    inStock: true,
    description: 'Single-origin premium coffee beans roasted to perfection.',
    brand: 'CoffeeMaster',
    colors: ['Dark Roast', 'Medium Roast', 'Light Roast'],
    sizes: ['250g', '500g', '1kg'],
    featured: true
  },
  {
    _id: 'prod18',
    name: 'Healthy Snack Box',
    image: product18,
    category: 'groceries',
    subcategory: 'Snacks & Treats',
    price: 19,
    originalPrice: 25,
    discount: 24,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    description: 'Curated selection of healthy snacks for guilt-free indulgence.',
    brand: 'HealthyBites',
    colors: ['Mixed'],
    sizes: ['Small Box', 'Large Box'],
    featured: false
  },

  // Beauty & Care Products
  {
    _id: 'prod19',
    name: 'Anti-Aging Serum',
    image: product19,
    category: 'beauty',
    subcategory: 'Premium Skincare',
    price: 79,
    originalPrice: 99,
    discount: 20,
    rating: 4.7,
    reviews: 389,
    inStock: true,
    description: 'Advanced anti-aging serum with retinol and hyaluronic acid for youthful skin.',
    brand: 'SkinLux',
    colors: ['Clear'],
    sizes: ['30ml', '50ml'],
    featured: true
  },
  {
    _id: 'prod20',
    name: 'Makeup Palette',
    image: product20,
    category: 'beauty',
    subcategory: 'Makeup & Cosmetics',
    price: 49,
    originalPrice: 69,
    discount: 29,
    rating: 4.6,
    reviews: 567,
    inStock: true,
    description: 'Professional makeup palette with 20 versatile shades for every occasion.',
    brand: 'GlamPro',
    colors: ['Neutral', 'Bold', 'Smoky'],
    sizes: ['Standard'],
    featured: false
  },
  {
    _id: 'prod21',
    name: 'Luxury Perfume',
    image: product21,
    category: 'beauty',
    subcategory: 'Luxury Fragrances',
    price: 129,
    originalPrice: 179,
    discount: 28,
    rating: 4.8,
    reviews: 234,
    inStock: true,
    description: 'Exquisite fragrance with notes of jasmine, vanilla, and sandalwood.',
    brand: 'Essence',
    colors: ['Gold'],
    sizes: ['50ml', '100ml'],
    featured: true
  },

  // Health & Wellness Products
  {
    _id: 'prod22',
    name: 'Multivitamin Supplements',
    image: product22,
    category: 'health',
    subcategory: 'Vitamins & Supplements',
    price: 39,
    originalPrice: 49,
    discount: 20,
    rating: 4.5,
    reviews: 789,
    inStock: true,
    description: 'Complete daily multivitamin with essential nutrients for optimal health.',
    brand: 'VitalHealth',
    colors: ['Standard'],
    sizes: ['60 Capsules', '120 Capsules'],
    featured: true
  },
  {
    _id: 'prod23',
    name: 'Home Gym Equipment',
    image: product23,
    category: 'health',
    subcategory: 'Fitness Equipment',
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.7,
    reviews: 156,
    inStock: true,
    description: 'Complete home gym set with adjustable weights and resistance bands.',
    brand: 'FitHome',
    colors: ['Black'],
    sizes: ['Standard Set'],
    featured: false
  },
  {
    _id: 'prod24',
    name: 'Smart Fitness Tracker',
    image: product24,
    category: 'health',
    subcategory: 'Health Monitors',
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.6,
    reviews: 445,
    inStock: true,
    description: 'Advanced fitness tracker with heart rate monitoring and sleep tracking.',
    brand: 'HealthTech',
    colors: ['Black', 'Blue', 'Pink'],
    sizes: ['Small', 'Medium', 'Large'],
    featured: true
  },

  // Jewelry & Watches Products
  {
    _id: 'prod25',
    name: 'Diamond Engagement Ring',
    image: product25,
    category: 'jewelry',
    subcategory: 'Diamond Jewelry',
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.9,
    reviews: 67,
    inStock: true,
    description: 'Stunning diamond engagement ring with certified 1-carat center stone.',
    brand: 'DiamondLux',
    colors: ['White Gold', 'Yellow Gold', 'Rose Gold'],
    sizes: ['5', '6', '7', '8', '9'],
    featured: true
  },
  {
    _id: 'prod26',
    name: 'Gold Necklace',
    image: product26,
    category: 'jewelry',
    subcategory: 'Gold & Silver',
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.8,
    reviews: 123,
    inStock: true,
    description: '14k gold chain necklace with elegant pendant design.',
    brand: 'GoldCraft',
    colors: ['Gold'],
    sizes: ['16"', '18"', '20"'],
    featured: false
  },
  {
    _id: 'prod27',
    name: 'Premium Watch Collection',
    image: product27,
    category: 'jewelry',
    subcategory: 'Luxury Watches',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.7,
    reviews: 89,
    inStock: true,
    description: 'Luxury timepiece with Swiss movement and premium leather strap.',
    brand: 'TimeElite',
    colors: ['Black', 'Brown'],
    sizes: ['40mm', '42mm'],
    featured: true
  },

  // Sports & Outdoors Products
  {
    _id: 'prod28',
    name: 'Professional Tennis Racket',
    image: product28,
    category: 'sports',
    subcategory: 'Team Sports',
    price: 199,
    originalPrice: 259,
    discount: 23,
    rating: 4.6,
    reviews: 234,
    inStock: true,
    description: 'Professional-grade tennis racket used by tournament players worldwide.',
    brand: 'TennisPro',
    colors: ['Black/Red', 'Blue/White'],
    sizes: ['4 1/4"', '4 3/8"', '4 1/2"'],
    featured: true
  },
  {
    _id: 'prod29',
    name: 'Camping Tent',
    image: product29,
    category: 'sports',
    subcategory: 'Outdoor Adventure',
    price: 179,
    originalPrice: 229,
    discount: 22,
    rating: 4.7,
    reviews: 345,
    inStock: true,
    description: 'Waterproof 4-person camping tent perfect for outdoor adventures.',
    brand: 'OutdoorMax',
    colors: ['Green', 'Orange'],
    sizes: ['2-Person', '4-Person', '6-Person'],
    featured: false
  },
  {
    _id: 'prod30',
    name: 'Yoga Mat Set',
    image: product30,
    category: 'sports',
    subcategory: 'Fitness & Gym',
    price: 49,
    originalPrice: 69,
    discount: 29,
    rating: 4.5,
    reviews: 567,
    inStock: true,
    description: 'Premium yoga mat with carrying bag and alignment guides.',
    brand: 'ZenFit',
    colors: ['Purple', 'Blue', 'Pink', 'Black'],
    sizes: ['Standard'],
    featured: true
  },

  // Books & Media Products
  {
    _id: 'prod31',
    name: 'Bestseller Novel Collection',
    image: product31,
    category: 'books',
    subcategory: 'Bestseller Books',
    price: 29,
    originalPrice: 39,
    discount: 26,
    rating: 4.8,
    reviews: 1234,
    inStock: true,
    description: 'Collection of top bestselling novels from award-winning authors.',
    brand: 'BookWorld',
    colors: ['Hardcover', 'Paperback'],
    sizes: ['3-Book Set', '5-Book Set'],
    featured: true
  },
  {
    _id: 'prod32',
    name: 'Vintage Vinyl Records',
    image: product32,
    category: 'books',
    subcategory: 'Music & Vinyl',
    price: 89,
    originalPrice: 119,
    discount: 25,
    rating: 4.9,
    reviews: 167,
    inStock: true,
    description: 'Classic vinyl records from legendary artists, remastered for perfect sound.',
    brand: 'VinylClassics',
    colors: ['Black'],
    sizes: ['LP'],
    featured: false
  },
  {
    _id: 'prod33',
    name: 'Gaming Console Bundle',
    image: product33,
    category: 'books',
    subcategory: 'Video Games',
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.7,
    reviews: 445,
    inStock: true,
    description: 'Latest gaming console with popular game titles and extra controller.',
    brand: 'GameStation',
    colors: ['Black', 'White'],
    sizes: ['Standard Bundle'],
    featured: true
  },

  // Automotive Products
  {
    _id: 'prod34',
    name: 'Car Dashboard Camera',
    image: product34,
    category: 'automotive',
    subcategory: 'Electronics & GPS',
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.6,
    reviews: 289,
    inStock: true,
    description: '4K dashboard camera with night vision and GPS tracking for vehicle security.',
    brand: 'DriveSafe',
    colors: ['Black'],
    sizes: ['Standard'],
    featured: true
  },
  {
    _id: 'prod35',
    name: 'Premium Car Care Kit',
    image: product35,
    category: 'automotive',
    subcategory: 'Car Care Products',
    price: 79,
    originalPrice: 99,
    discount: 20,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    description: 'Complete car care kit with premium wax, polish, and cleaning supplies.',
    brand: 'AutoShine',
    colors: ['Mixed'],
    sizes: ['Complete Kit'],
    feature : true
    },
  {
    _id: 'prod36',
    name: 'Motorcycle Helmet',
    image: product36,
    category: 'automotive',
    subcategory: 'Motorcycle Gear',
    price: 199,
    originalPrice: 259,
    discount: 23,
    rating: 4.7,
    reviews: 178,
    inStock: true,
    description: 'DOT certified motorcycle helmet with advanced ventilation and anti-fog visor.',
    brand: 'SafeRide',
    colors: ['Black', 'White', 'Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: false
  }
];

// Featured products for homepage
export const featuredProducts = products.filter(product => product.featured);

// Best selling products (based on reviews count)
export const bestSellingProducts = products
  .sort((a, b) => b.reviews - a.reviews)
  .slice(0, 12);

// New arrivals (last 10 products)
export const newArrivals = products.slice(-10);

// Products on sale (with discounts)
export const saleProducts = products.filter(product => product.discount > 0);

// Product filters and sorting options
export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
  { id: '100-200', label: '$100 - $200', min: 100, max: 200 },
  { id: '200-500', label: '$200 - $500', min: 200, max: 500 },
  { id: 'over-500', label: 'Over $500', min: 500, max: Infinity }
];

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low-high', label: 'Price: Low to High' },
  { id: 'price-high-low', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
  { id: 'bestselling', label: 'Best Selling' }
];

export const brands = [
  'LuxeHome', 'SecureHome', 'ChefMaster', 'Elegance', 'Gentleman', 'Chronos',
  'TechPro', 'GameMax', 'AudioMax', 'LuxeBag', 'Wanderer', 'TravelLux',
  'RunMax', 'Executive', 'Glamour', 'FreshOrganics', 'CoffeeMaster', 'HealthyBites',
  'SkinLux', 'GlamPro', 'Essence', 'VitalHealth', 'FitHome', 'HealthTech',
  'DiamondLux', 'GoldCraft', 'TimeElite', 'TennisPro', 'OutdoorMax', 'ZenFit',
  'BookWorld', 'VinylClassics', 'GameStation', 'DriveSafe', 'AutoShine', 'SafeRide'
];

// Utility functions for product data
export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsBySubcategory = (subcategory) => {
  return products.filter(product => product.subcategory === subcategory);
};

export const getProductById = (productId) => {
  return products.find(product => product._id === productId);
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p._id !== productId)
    .slice(0, limit);
};

export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.subcategory.toLowerCase().includes(searchTerm)
  );
};

// Cart and wishlist utility functions
export const calculateDiscountedPrice = (originalPrice, discount) => {
  return originalPrice - (originalPrice * discount / 100);
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    const price = item.originalPrice - (item.originalPrice * item.discount / 100);
    return total + (price * item.quantity);
  }, 0);
};

// Review and rating helpers
export const getAverageRating = (productId) => {
  const product = getProductById(productId);
  return product ? product.rating : 0;
};

export const getRatingStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('★');
  }
  
  if (hasHalfStar) {
    stars.push('☆');
  }
  
  while (stars.length < 5) {
    stars.push('☆');
  }
  
  return stars.join('');
};

// Export default object with all assets and data
export default {
  assets,
  categories,
  products,
  featuredProducts,
  bestSellingProducts,
  newArrivals,
  saleProducts,
  priceRanges,
  sortOptions,
  brands,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductById,
  getRelatedProducts,
  searchProducts,
  calculateDiscountedPrice,
  formatPrice,
  calculateTotalPrice,
  getAverageRating,
  getRatingStars
};