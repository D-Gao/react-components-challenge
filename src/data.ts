export const categories = {
  "1001": { categoryId: "1001", name: "Electronics" },
  "1002": { categoryId: "1002", name: "Home & Kitchen" },
  /* "1003": { categoryId: "1003", name: "Fitness & Outdoors" },
  "1004": { categoryId: "1004", name: "Fashion & Accessories" },
  "1005": { categoryId: "1005", name: "Office Supplies" }, */
};

export type Product = {
  id: string;
  ref: string;
  name: string;
  categoryId: string;
  description: string;
  imageUrlPath: string;
};

export const totalProducts = [
  {
    id: "1",
    ref: "007",
    name: "Classic Watch",
    categoryId: "1004",
    description: "A timeless classic watch with leather straps.",
    imageUrlPath: "/images/products/classic-watch.jpg",
  },
  {
    id: "2",
    ref: "008",
    name: "Sports Shoes",
    categoryId: "1004",
    description: "High-performance running shoes for all terrains.",
    imageUrlPath: "/images/products/sports-shoes.jpg",
  },
  {
    id: "3",
    ref: "009",
    name: "Wireless Earbuds",
    categoryId: "1001",
    description: "Noise-cancelling wireless earbuds with a sleek design.",
    imageUrlPath: "/images/products/wireless-earbuds.jpg",
  },
  {
    id: "4",
    ref: "010",
    name: "Smartphone",
    categoryId: "1001",
    description: "Latest model smartphone with advanced features.",
    imageUrlPath: "/images/products/smartphone.jpg",
  },
  {
    id: "5",
    ref: "011",
    name: "Gaming Laptop",
    categoryId: "1001",
    description: "High-end gaming laptop with powerful graphics card.",
    imageUrlPath: "/images/products/gaming-laptop.jpg",
  },
  {
    id: "6",
    ref: "012",
    name: "Bluetooth Speaker",
    categoryId: "1001",
    description: "Portable Bluetooth speaker with high-quality sound.",
    imageUrlPath: "/images/products/bluetooth-speaker.jpg",
  },
  {
    id: "7",
    ref: "013",
    name: "Fitness Tracker",
    categoryId: "1003",
    description: "Wearable fitness tracker with heart rate monitoring.",
    imageUrlPath: "/images/products/fitness-tracker.jpg",
  },
  {
    id: "8",
    ref: "014",
    name: "Electric Kettle",
    categoryId: "1002",
    description: "Fast-boil electric kettle with automatic shutoff.",
    imageUrlPath: "/images/products/electric-kettle.jpg",
  },
  {
    id: "9",
    ref: "015",
    name: "Backpack",
    categoryId: "1005",
    description: "Durable backpack with multiple compartments.",
    imageUrlPath: "/images/products/backpack.jpg",
  },
  {
    id: "10",
    ref: "016",
    name: "Desk Lamp",
    categoryId: "1005",
    description: "LED desk lamp with adjustable brightness.",
    imageUrlPath: "/images/products/desk-lamp.jpg",
  },
  {
    id: "11",
    ref: "017",
    name: "Coffee Maker",
    categoryId: "1002",
    description: "Single-serve coffee maker with reusable filter.",
    imageUrlPath: "/images/products/coffee-maker.jpg",
  },
  {
    id: "12",
    ref: "018",
    name: "Smart TV",
    categoryId: "1001",
    description: "4K Ultra HD smart TV with voice control.",
    imageUrlPath: "/images/products/smart-tv.jpg",
  },
  {
    id: "13",
    ref: "019",
    name: "Tablet",
    categoryId: "1001",
    description: "Lightweight tablet with high-resolution display.",
    imageUrlPath: "/images/products/tablet.jpg",
  },
  {
    id: "14",
    ref: "020",
    name: "Wireless Charger",
    categoryId: "1001",
    description: "Fast wireless charger compatible with multiple devices.",
    imageUrlPath: "/images/products/wireless-charger.jpg",
  },
  {
    id: "15",
    ref: "021",
    name: "Office Chair",
    categoryId: "1005",
    description: "Ergonomic office chair with adjustable lumbar support.",
    imageUrlPath: "/images/products/office-chair.jpg",
  },
  {
    id: "16",
    ref: "022",
    name: "Digital Camera",
    categoryId: "1001",
    description: "Compact digital camera with high zoom capability.",
    imageUrlPath: "/images/products/digital-camera.jpg",
  },
  {
    id: "17",
    ref: "023",
    name: "Air Purifier",
    categoryId: "1002",
    description: "HEPA air purifier suitable for large rooms.",
    imageUrlPath: "/images/products/air-purifier.jpg",
  },
  {
    id: "18",
    ref: "024",
    name: "Yoga Mat",
    categoryId: "1003",
    description: "Eco-friendly yoga mat with non-slip surface.",
    imageUrlPath: "/images/products/yoga-mat.jpg",
  },
  {
    id: "19",
    ref: "025",
    name: "Portable Projector",
    categoryId: "1001",
    description: "Mini portable projector with HDMI and USB support.",
    imageUrlPath: "/images/products/portable-projector.jpg",
  },
  {
    id: "20",
    ref: "026",
    name: "Electric Toothbrush",
    categoryId: "1002",
    description: "Rechargeable electric toothbrush with multiple modes.",
    imageUrlPath: "/images/products/electric-toothbrush.jpg",
  },
];
