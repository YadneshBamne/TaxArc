import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-white'>

      {/* Soft radial glow */}
      <div className='absolute w-150 h-150 rounded-full bg-[#17D3CF]/10 blur-3xl pointer-events-none' />

      {/* 404 */}
      <div className='relative z-10 flex flex-col items-center text-center select-none'>

        {/* Big 404 with staggered letters */}
        <div className='flex items-center leading-none'>
          {['4', '0', '4'].map((char, i) => (
            <motion.span
              key={i}
              className='text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[200px] font-black text-gray-900'
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 100 }}
            >
              {char === '0' ? (
                <span className='text-[#17D3CF]'>{char}</span>
              ) : char}
            </motion.span>
          ))}
        </div>

        {/* Animated line */}
        <motion.div
          className='h-1 rounded-full bg-[#17D3CF] mt-2 mb-8'
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        />

        {/* Go back link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            to='/'
            className='text-sm font-semibold text-gray-400 hover:text-[#17D3CF] tracking-widest uppercase transition-colors'
          >
            ← Go Home
          </Link>
        </motion.div>
      </div>

    </div>
  )
}

export default NotFound
