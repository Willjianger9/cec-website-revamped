"use client";

import Link from "next/link";
import { useState } from "react";

// Mock Data for Blogs (Can be moved to a separate file later)
const blogs = [
  { id: 1, title: "Title", description: "Description", category: "Concerts" },
  { id: 2, title: "Title", description: "Description", category: "Films" },
  { id: 3, title: "Title", description: "Description", category: "Concerts" },
  { id: 4, title: "Title", description: "Description", category: "Festivals" },
  { id: 5, title: "Title", description: "Description", category: "Speakers" },
  { id: 6, title: "Title", description: "Description", category: "Films" },
];

const categories = ["Concerts", "Films", "Festivals", "Speakers"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter blogs based on selection (optional logic, but good for interactivity)
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="min-h-screen bg-[#5b7cf7] p-8 text-white font-sans">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-8">All Blogs</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category
              )
            }
            className={`px-8 py-3 rounded-full text-lg font-medium transition-colors ${selectedCategory === category
                ? "bg-[#ffc107] text-black"
                : "bg-[#ffc107] text-white hover:bg-[#ffcd38]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id} passHref>
            <div className="bg-[#8e8e93] w-full aspect-square relative shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300">
              {/* Card Content */}
              <div className="absolute top-4 left-4">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-white text-lg">{blog.description}</p>
              </div>

              {/* Shadow effect block behind - simplified as just generic shadow on parent for now, 
                   or we can add a div for the specific shadow look if needed. 
                   The design shows a drop shadow/border look. 
                   Let's add a pseudo-element or extra div if the simple shadow isn't enough. 
               */}
              <div className="absolute inset-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] pointer-events-none"></div>
            </div>
          </Link>
        ))}
      </div>


    </div>
  );
}
