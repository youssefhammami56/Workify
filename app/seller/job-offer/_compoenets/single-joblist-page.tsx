"use client";
import { getalljoboffersdispo } from "@/actions/get-alljoboffersdispo";
import React, { useState, useEffect } from "react";
import JobItem from "./job-item";
import { categories } from "@/utils/categories";
import { useRouter } from "next/navigation";

interface SingleJobListProps {
  jobs: {
    id: number;
    title: string;
    category: string;
    description: string;
    createdAt: string;
    imagesrc: string;
    createdBy: {
      profileImage?: string;
      email?: string;
      username?: string;
    };
  }[];
}

function SingleJobList({ jobs }: SingleJobListProps) {
  const router=useRouter()
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (category === "") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) => job.category === category);
      setFilteredJobs(filtered);
    }
  }, [category, jobs]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Explore Job Offers
      </h1>
      <div className="flex items-center justify-center mb-6">
        <label htmlFor="categories" className="text-gray-700 mr-4">
          Filter by Category:
        </label>
        <select
          id="categories"
          className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100"
            onClick={() => router.push(`/seller/job-offer/${job.id}`)}
          >
            <img
              src={job.imagesrc || "/default-profile.jpg"}
              alt="Profile"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">Category: {job.category}</span>
                <span>
                  Created on {new Date(job.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleJobList;
