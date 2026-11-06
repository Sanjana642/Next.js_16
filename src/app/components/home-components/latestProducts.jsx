import React from "react";
import ProductCard from "../common/productCard";

export default function LatestProducts() {
    return (
        <section className="bg-lime-50 py-10">
            <h2 className="text-3xl font-bold text-center">Latest Products</h2>

            <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            </div>
        </section>
    );
}