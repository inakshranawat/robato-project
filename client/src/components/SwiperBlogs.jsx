import React, { useRef, useState, useEffect } from 'react'
import { swiperBlog } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SwiperBlogs = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [centerIndex, setCenterIndex] = useState(0)

  // Auto scroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex(prev =>
        prev === swiperBlog.length - 1 ? 0 : prev + 1
      )
    }, 3000) // change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Scroll to center card
  useEffect(() => {
    const container = containerRef.current
    const card = container.children[centerIndex]
    if (card) {
      const containerCenter = container.offsetWidth / 2
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      container.scrollTo({
        left: cardCenter - containerCenter,
        behavior: 'smooth'
      })
    }
  }, [centerIndex])

  return (
    <div className='bg-[#f5f5f5] w-full  py-20'>
      <div className='mx-auto text-[#444444] mb-10'>
        <h1 className='text-center text-6xl font-bold'>MACHINOX PRO BLOG</h1>
        <p className='text-center text-2xl font-bold mt-5'>READ THE LATEST</p>
      </div>

      <div
        ref={containerRef}
        className='flex overflow-x-auto space-x-6 px-6  scrollbar-hide snap-x snap-mandatory'
      >
        {swiperBlog.map((blog, index) => (
          <motion.div
            key={blog.slug}
            onClick={() => navigate(`/blog/${blog.slug}`)}
            className='flex-shrink-0 mt-10 items-center  w-72 md:w-80 lg:w-96 cursor-pointer rounded-2xl overflow-hidden'
            animate={{
              scale: centerIndex === index ? 1.05 : 0.95,
              opacity: centerIndex === index ? 1 : 0.5,
              boxShadow:
                centerIndex === index
                  ? '0px 10px 30px rgba(0,0,0,0.3)'
                  : 'none'
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className='w-full h-56 object-cover rounded-t-2xl'
            />
            <div className='p-5'>
              <span className='inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3'>
                {blog.category || 'General'}
              </span>
              <h2 className='text-lg font-semibold text-purple-800 mb-2'>
                {blog.title}
              </h2>
              <p className='text-gray-700 text-sm line-clamp-3'>
                {blog.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='text-center mt-20' >
         <button onClick={()=> navigate('/blogs')} className='px-10 font-bold  hover:bg-purple-800 py-2 bg-purple-950 text-center text-white'>SEE ALL POSTS</button>
      </div>
    </div>
  )
}

export default SwiperBlogs
