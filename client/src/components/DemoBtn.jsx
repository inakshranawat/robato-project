import React from 'react'
import { useAppContext } from '../context/useContext'

const DemoBtn = () => {
    const {demoOpen, setDemoOpen} = useAppContext()

    
  return (
    <>
      <div>
         {demoOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto">
         <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl relative my-8">
  {/* Purple Header */}
  <div className="bg-[#430099] px-4 md:px-8 py-4 relative">
    <button
      onClick={() => setDemoOpen(false)}
      className="absolute top-3 right-3 md:right-5 text-white hover:text-gray-200 text-3xl font-light leading-none"
    >
      ×
    </button>
    <h2 className="text-lg md:text-2xl font-semibold text-white pr-8">BOOK A DEMO - MachinoX Pro</h2>
  </div>

  {/* Form Content */}
  <div className="px-4 md:px-8 py-4 max-h-[70vh] overflow-y-auto">
    <div className="grid grid-cols-1 gap-4">
      {/* First Row - Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            defaultValue="India"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Job Title
          </label>
          <input
            type="text"
            placeholder="Specify your job title"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Second Row - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Company
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="e.g user@gmail.com"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="91 788711383"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Please type your message"
          rows="3"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-2">
        <button
          type="submit"
          className="bg-[#430099] text-white px-10 py-2 rounded-full hover:bg-purple-800 transition font-semibold text-base uppercase tracking-wide"
        >
          Submit
        </button>
      </div>
    </div>
  </div>

  {/* Purple Footer */}
  <div className="bg-[#430099] px-4 md:px-8 py-3 flex justify-end">
    <span className="text-white text-sm md:text-base font-light">Robato Systems Pvt. Ltd.</span>
  </div>
</div>

        </div>
      )}
      </div>
    </>
  )
}

export default DemoBtn