
import { useNavigate } from "react-router-dom";
import { blogs } from "../assets/assets.js";

// Utility function to extract plain text from HTML for preview
function getTextPreview(html, maxChars = 200) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
}

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#3a3a3a] min-h-screen py-10  px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-10  mb-10 text-center leading-tight">
        UNLOCKING TOMORROW'S POTENTIAL: <br /> ROBATO SYSTEMS BLOG
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            onClick={() => navigate(`/blog/${blog.slug}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl cursor-pointer overflow-hidden transform transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            <div className="p-5">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                {blog.category || "General"}
              </span>

              <h2 className="text-lg font-semibold text-purple-800 hover:text-purple-900 hover:underline mb-2">
                {blog.title}
              </h2>

              {/* Show 3-line preview using plain text */}
              <p className="text-gray-700 text-sm line-clamp-3 break-words whitespace-pre-wrap">
                {getTextPreview(blog.description, 200)}
              </p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Blogs;
