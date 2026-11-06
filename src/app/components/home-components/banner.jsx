"use client";

import React from "react";
import { useState } from "react";

export default function Banner() {

  const [modal, setModal] = useState(false);

  const openEnquireModal = (e) => {
    e.preventDefault();
    console.log("Enquire Now button clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <>
      <section
        className="bg-cover bg-center min-h-[600px] w-full flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GnTtSTzVUoxY9sabh3bqM5nuwJ7vIEpKPHvmE7STtA&s=10')",
        }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-3xl font-bold text-center text-white">
            Live Above It All - The pinnacle of
            <br />
            luxury, Pune
          </h1>

          <p className="text-lg text-center text-white">
            Experience the epitome of luxury living in Pune with our exquisite
            properties, offering unparalleled comfort and style.
          </p>

          <button
            type="button"
            onClick={() => setModal(true)}
            className="bg-white px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Enquire Now
          </button>

          {/* Form moved inside the banner section */}
          {modal && (
          <div className="w-[350px] bg-lime-50 flex items-center justify-center p-4 rounded-lg">
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Enquire Now</h2>

                <button
                  type="button"
                  onClick={() => setModal(false)}
                  className="text-2xl font-bold text-gray-600 hover:text-red-500"
                >
                  &times;
                </button>
              </div>

              <label htmlFor="name" className="text-gray-700">
                Name:
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded px-2 py-1"
                required
              />

              <label htmlFor="email" className="text-gray-700">
                Email:
              </label>

              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded px-2 py-1"
                required
              />

              <label htmlFor="message" className="text-gray-700">
                Message:
              </label>

              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded px-2 py-1"
                required
              />

              <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        </div>
      </section>
    </>
  );
}
