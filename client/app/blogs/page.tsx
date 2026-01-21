"use client";

import Link from "next/link";
import { useState } from "react";

// Mock Data for Blogs (Can be moved to a separate file later)
const blogs = [
  { id: 1, title: "Title", description: "Description", category: "Concerts", date: "2023-10-01" },
  { id: 2, title: "Title", description: "Description", category: "Films", date: "2023-11-15" },
  { id: 3, title: "Title", description: "Description", category: "Concerts", date: "2023-09-20" },
  { id: 4, title: "Title", description: "Description", category: "Festivals", date: "2024-01-10" },
  { id: 5, title: "Title", description: "Description", category: "Speakers", date: "2023-12-05" },
  { id: 6, title: "Title", description: "Description", category: "Films", date: "2024-02-01" },
];

const categories = ["Concerts", "Films", "Festivals", "Speakers"];

export default function BlogsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Filter blogs based on selection (optional logic, but good for interactivity)
  const filteredBlogs = (selectedCategories.length > 0
    ? blogs.filter((blog) => selectedCategories.includes(blog.category))
    : blogs
  ).sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  return (
    <div className="min-h-screen bg-[#5b7cf7] p-8 text-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold">All Blogs</h1>
      </div>

      {/* Filter Buttons & Sort */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-colors ${selectedCategories.includes(category)
                ? "bg-[#ffc107] text-black"
                : "bg-[#ffc107] text-white hover:bg-[#ffcd38]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort Button */}
        <button
          onClick={toggleSortOrder}
          className="flex items-center gap-2 px-6 py-3 bg-[#ffc107] text-white hover:bg-[#ffcd38] rounded-full text-lg font-medium transition-colors"
        >
          <span>Sort: {sortOrder === "newest" ? "Newest" : "Oldest"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transform transition-transform ${sortOrder === "newest" ? "rotate-0" : "rotate-180"}`}
          >
            <path d="M3 6h18" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
          </svg>
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id} passHref>
            <div className="bg-[#8e8e93] w-full aspect-square relative shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300">
              {/* Card Content */}
              <div className="absolute top-4 left-4 right-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-3xl font-bold text-white">
                    {blog.title}
                  </h2>
                  <span className="text-sm font-medium bg-black/20 px-2 py-1 rounded text-white">
                    {blog.date}
                  </span>
                </div>
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
