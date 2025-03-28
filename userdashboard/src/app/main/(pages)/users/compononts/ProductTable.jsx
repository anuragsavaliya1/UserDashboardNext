"use client";

import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-auto flex-grow">
        <table className="w-full text-sm text-left border-collapse">
          {/* Fixed Table Head */}
          <thead className="bg-gray-100 text-gray-600 font-semibold sticky top-0 z-10">
            <tr>
              <th className="py-2 px-3">ID</th>
              <th className="py-2 px-3">Image</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Mobile</th>
              <th className="py-2 px-3">Gender</th>
              <th className="py-2 px-3">Age</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>

          {/* Scrollable Table Body */}
          <tbody className="divide-y divide-gray-200">
            {products.map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="py-2 px-3 font-medium">{item.id}</td>
                <td className="py-2 px-3">
                  <img src={item.image} alt="product" className="w-10 h-10 rounded object-cover" />
                </td>
                <td className="py-2 px-3 font-medium">{item.firstName + " " + item.lastName}</td>
                <td className="py-2 px-3">{item.phone}</td>
                <td className="py-2 px-3">{item.gender}</td>
                <td className="py-2 px-3">{item.age}</td>
                <td className="py-2 px-3 flex gap-3 text-gray-600">
                  <button className="hover:text-blue-600">
                    <FaEdit />
                  </button>
                  <button className="hover:text-red-600">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
