
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const products = [
  {
    id: "1",
    name: "Premium Casual Sneakers",
    category: "Footwear",
    price: 2499,
    oldPrice: 3999,
    rating: 4.5,
    reviews: 128,
    description:
      "Experience ultimate comfort and style with our premium casual sneakers. Designed for everyday wear with breathable material and a lightweight sole.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    ],
    colors: ["#111827", "#dc2626", "#f5f5f4"],
    sizes: ["7", "8", "9", "10", "11"],
    stock: 15,
  },
  {
    id: "2",
    name: "Classic Leather Backpack",
    category: "Accessories",
    price: 1899,
    oldPrice: 2999,
    rating: 4.8,
    reviews: 95,
    description:
      "A stylish and durable backpack made for your everyday adventures. Features spacious compartments and premium finishing.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
    ],
    colors: ["#78350f", "#111827"],
    sizes: ["Standard"],
    stock: 20,
  },
  {
    id: "3",
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 3499,
    oldPrice: 4999,
    rating: 4.6,
    reviews: 210,
    description:
      "Enjoy immersive sound with premium wireless headphones. Comfortable ear cushions, powerful bass, and long-lasting battery life.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
    ],
    colors: ["#111827", "#dc2626"],
    sizes: ["Standard"],
    stock: 12,
  },
  {
    id: "4",
    name: "Minimal Classic Wrist Watch",
    category: "Watches",
    price: 2799,
    oldPrice: 4499,
    rating: 4.7,
    reviews: 156,
    description:
      "Upgrade your look with this minimal classic wristwatch. Featuring a sophisticated design, durable strap, and precise movement.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
    ],
    colors: ["#111827", "#78350f"],
    sizes: ["Standard"],
    stock: 8,
  },
];

export default function ProductDetails() {
  const params = useParams();
  const product = products.find((p) => p.id === params.pid);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">
          Product Not Found
        </h1>
      </div>
    );
  }

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const addToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select color and size");
      return;
    }

    alert(`${product.name} added to cart! Quantity: ${quantity}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          Home / {product.category} /{" "}
          <span className="font-semibold text-gray-900">
            {product.name}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">

          {/* Product Images */}
          <div>
            <div className="overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-[400px] w-full object-cover transition duration-500 hover:scale-105 md:h-[520px]"
              />
            </div>

            <div className="mt-4 flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-20 w-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col">

            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-lg text-yellow-500">
                ★★★★★
              </span>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {discount}% OFF
              </span>
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="my-6 border-t border-gray-200" />

            {/* Color Selection */}
            <div>
              <h3 className="mb-3 font-semibold text-gray-900">
                Select Color
              </h3>

              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`h-9 w-9 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-300"
                    }`}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-5 py-2 text-sm font-medium transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-gray-700 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Quantity
              </h3>

              <div className="flex w-fit items-center rounded-lg border border-gray-300">
                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="px-4 py-2 text-xl"
                >
                  -
                </button>

                <span className="px-4 font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  className="px-4 py-2 text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock */}
            <p className="mt-5 text-sm font-medium text-green-600">
              ✓ In Stock ({product.stock} available)
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={addToCart}
                className="flex-1 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
              >
                Add To Cart
              </button>

              <button
                onClick={addToCart}
                className="flex-1 rounded-xl border border-black px-6 py-4 font-semibold text-black transition hover:bg-gray-100"
              >
                Buy Now
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-3 border-t border-gray-200 pt-6 text-sm text-gray-600">
              <p>🚚 Free delivery on orders above ₹999</p>
              <p>↩️ Easy 7-day returns</p>
              <p>🔒 Secure payment</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
