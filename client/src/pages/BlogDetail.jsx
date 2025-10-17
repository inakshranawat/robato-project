// BlogDetail.jsx
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../assets/assets.js";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    // Fix sticky behavior with Locomotive Scroll
    if (sidebarRef.current) {
      sidebarRef.current.setAttribute('data-scroll', '');
      sidebarRef.current.setAttribute('data-scroll-sticky', '');
      sidebarRef.current.setAttribute('data-scroll-target', '#main-content');
    }
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-gray-600">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Blog not found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition w-full sm:w-auto"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug).slice(0, 7);

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] mb-6 sm:mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-b-2xl sm:rounded-b-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50 flex items-center justify-center px-4 sm:px-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center drop-shadow-lg leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Author Info */}
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 lg:mt-10">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <p className="text-sm sm:text-base text-gray-600">
                Written By: <span className="font-bold text-gray-900">{blog.writtenBy}</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="font-medium">{blog.companyName}</span>
              <span className="hidden sm:inline">•</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div id="main-content" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left/Main Column */}
        <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-4 sm:mb-6">
            {blog.category}
          </span>

          {/* Description using dangerouslySetInnerHTML */}
          <div
            className="text-gray-700 text-base sm:text-lg leading-relaxed break-words whitespace-pre-wrap prose prose-sm sm:prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />

          {/* Back Button */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate(-1)}
              className="bg-indigo-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base font-medium"
            >
              ← Back
            </button>
          </div>
        </div>

        {/* Right Column: Related Blogs - Now with proper sticky */}
        <div 
          ref={sidebarRef}
          className="bg-white mt-20 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8"
          style={{
            position: 'sticky',
            top: '20px',
            alignSelf: 'flex-start',
            maxHeight: 'calc(100vh - 40px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            scrollbarWidth: 'thin'
          }}
        >
          <h3 className="text-lg sm:text-xl text-center font-bold mb-4 sm:mb-6 text-gray-900 sticky top-0 bg-white z-10 pb-2">Related Blogs</h3>
          {relatedBlogs.length === 0 ? (
            <p className="text-gray-500 text-sm sm:text-base">No related blogs found.</p>
          ) : (
            <ul className="space-y-3 sm:space-y-4">
              {relatedBlogs.map((rel) => (
                <li key={rel.slug} className="border-b border-gray-300 last:border-0 pb-3 sm:pb-4 last:pb-0">
                  <button
                    onClick={() => navigate(`/blog/${rel.slug}`)}
                    className="text-indigo-600 hover:text-indigo-800 transition font-medium text-left w-full text-sm sm:text-base leading-relaxed hover:underline"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                      display: 'block'
                    }}
                  >
                    {rel.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;