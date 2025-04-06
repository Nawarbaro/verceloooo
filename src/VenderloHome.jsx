
import React from "react";
export default function VenderloHome() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Venderlo</h1>
        <p className="text-lg text-gray-600">
          Buy and sell cars with ease. Connect directly with sellers.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((car) => (
          <div key={car} className="bg-white shadow-xl rounded-2xl p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Car"
              className="rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold">Car Title</h2>
            <p className="text-gray-600">Model, year, specs...</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl">View Details</button>
          </div>
        ))}
      </section>

      <section className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Post Your Car</h2>
        <form className="grid gap-4 bg-white p-6 rounded-2xl shadow-lg">
          <input className="border p-2 rounded" placeholder="Car Title" />
          <input className="border p-2 rounded" placeholder="Model / Year" />
          <textarea className="border p-2 rounded" placeholder="Description" />
          <input className="p-2" type="file" />
          <button className="bg-green-600 text-white py-2 rounded-xl" type="submit">Post Listing</button>
        </form>
      </section>
    </div>
  );
}
