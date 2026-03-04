import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const AccordionItem = ({ title, content, isOpen, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className='border-b border-gray-300 last:border-b-0'
    >
      <button
        onClick={onClick}
        className='w-full py-5 flex justify-between items-center text-left group'
      >
        <span className='font-medium text-lg text-gray-900'>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className='shrink-0 ml-4'
        >
          <div className='w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center'>
            <Plus className='w-5 h-5 text-white' strokeWidth={2.5} />
          </div>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden'
          >
            <p className='pb-5 text-gray-600 text-base leading-relaxed'>
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='w-full'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          delay={index * 0.1}
        />
      ))}
    </div>
  )
}

export default Accordion
