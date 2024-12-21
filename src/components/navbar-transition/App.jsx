import { useState } from 'react'
import './navbar.css'
import { motion } from 'framer-motion'

export default function App () {
    const [isOpen, setIsOpen] = useState(false)
    const rotateValue = 22.5
    const burger = {
        opened: (deg) => ({
            rotate: deg,
        }),
        closed: {
            rotate: 0
        }
    }

    return (
        <div className="h-screen w-screen bg-[#eaeaea] overflow-hidden">
            <img src="/end.jpg" 
                alt="hero image"
                className="absolute inset-0 w-full h-full object-cover
                origin-bottom
                "
            />
            <section className="w-full h-full px-12 pt-4">
                <div className="w-full p-2 border border-[#eaeaea] border-dashed
                    flex justify-between items-center rounded-lg relative z-40
                ">
                    <h1 className='font-bold text-[#eaeaea] text-2xl'>Planet.</h1>
                    <div 
                        className='space-y-2 cursor-pointer'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div 
                            className="w-[30px] h-[2px] bg-[#eaeaea] origin-left"
                            variants={burger}
                            animate={isOpen ? "opened" : "closed"}
                            custom={`${rotateValue}deg`}
                        />
                        <motion.div 
                            className="w-[30px] h-[2px] bg-[#eaeaea] origin-left"
                            variants={burger}
                            animate={isOpen ? "opened" : "closed"}
                            custom={`${-rotateValue}deg`}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}