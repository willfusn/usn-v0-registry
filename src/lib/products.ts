export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: string;
}

export const categories = ["Clothing", "Food", "Tech"];

export const products: Product[] = [
  {
    id: "emoji-cookie-1",
    name: "Cookie Emoji Baking Set",
    description:
      "Create your own emoji cookies with this baking set that includes cookie cutters and decorating tools.",
    price: 22.99,
    emoji: "🍪",
    category: "Food",
  },
  {
    id: "emoji-pizza-1",
    name: "Pizza Emoji Cutter Set",
    description:
      "Cut your pizza in style with this emoji pizza cutter set. Perfect for pizza lovers!",
    price: 15.99,
    emoji: "🍕",
    category: "Food",
  },
  {
    id: "emoji-hat-1",
    name: "Sunglasses Emoji Cap",
    description:
      "A stylish cap featuring the sunglasses emoji. Adjustable strap for a perfect fit.",
    price: 17.99,
    emoji: "🧢",
    category: "Clothing",
  },
  {
    id: "emoji-phone-1",
    name: "Phone Emoji Case",
    description:
      "Protect your phone with this fun emoji case featuring the classic phone emoji. Compatible with most smartphones.",
    price: 14.99,
    emoji: "📱",
    category: "Tech",
  },
  {
    id: "emoji-shoes-1",
    name: "Sneakers Emoji Sneakers",
    description:
      "Step up your shoe game with these sneakers featuring the cool sneakers emoji.",
    price: 49.99,
    emoji: "👟",
    category: "Clothing",
  },
  {
    id: "emoji-bag-1",
    name: "Shopping Bag Emoji Tote",
    description:
      "Carry your things in this spacious and stylish shopping bag emoji tote. Eco-friendly material.",
    price: 18.99,
    emoji: "🛍️",
    category: "Clothing",
  },
  {
    id: "emoji-camera-1",
    name: "Camera Emoji Lens Cleaner",
    description:
      "Keep your lenses spotless with this camera emoji-themed lens cleaner. Compact and convenient.",
    price: 8.99,
    emoji: "📸",
    category: "Tech",
  },
];
