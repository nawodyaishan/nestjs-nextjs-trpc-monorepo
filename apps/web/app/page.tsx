import React from "react";
import { trpc } from "@web/app/trpc";

export default async function Home() {
  const response = await trpc.hello.query({
    name: "Tom And Jerry",
  });

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">tRPC Showcase</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl text-center">{response}</h1>
      </div>
    </div>
  );
}
