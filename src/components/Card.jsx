import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { motion } from 'framer-motion';

function Card({ data, reference, onComplete }) {
    return (
        <motion.div 
            drag
            dragConstraints={reference}
            whileDrag={{scale: 1.2}}
            className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-8 px-10 overflow-hidden"
        >
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className="footer absolute bottom-0 w-full left-0">
                <button 
                    onClick={() => onComplete(data.id)} 
                    className={`tag w-full py-4 ${data.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
                >
                    <h3 className='text-sm font-semibold'>Mark as Complete</h3>
                </button>
            </div>
        </motion.div>
    )
}

export default Card