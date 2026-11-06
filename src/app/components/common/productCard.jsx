import React from "react";

export default function ProductCard() {
    return (
        <figure className="bg-white rounded-lg shadow-md p-4">
            <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" alt="shampoo bottle"/>

            <h3 className="text-xl font-bold mt-4">Shampoo</h3>

            <p className="text-gray-600 mt-2">This shampoo contains natural ingredients and is gentle on your hair.</p>

            <button className="bg-blue-300 text-black hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded mt-4">
                Read More
            </button>
        </figure>
        
        )
    }