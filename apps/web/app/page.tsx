"use client";

import React, { useState } from "react";
import { trpc } from "@web/app/trpc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e: any) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const serverResponse = await trpc.hello.query({
        name: name,
      });
      setResponse(serverResponse);
    } catch (error: any) {
      console.error("Error sending the request:", error);

      if (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify between items-center">
          <h1 className="text-white text-2xl font-bold">tRPC Showcase</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center">{response}</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter a name"
            className="p-2 border border-gray-300 rounded text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-2"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
