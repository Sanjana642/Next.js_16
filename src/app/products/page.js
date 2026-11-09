
"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../components/common/productCard";

export default function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();

            setProducts(data.products); 
            console.log(data.products); // gives an array of products in the console
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold py-10 text-center">
                Products
            </h1>

            <div className="max-w-[1320px] m-10">
                <div className="grid grid-cols-4 gap-4">
                    {products.map((obj) => (
                        <ProductCard
                            key={obj.id}
                            data={obj}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
