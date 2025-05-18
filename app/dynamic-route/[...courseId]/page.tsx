"use client";

import { useParams } from "next/navigation";

export default function dynamicRouting() {
  const params = useParams();
  const courseId = params.courseId;

  return (
    <div>
      <p>Post: {courseId?.[0]}</p>;
      <div className="mt-10">
        This is dynamic route
        <div>
          <button
            type="button"
            className="text-white w-full cursor-pointer mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Id
          </button>
        </div>
      </div>
    </div>
  );
}
