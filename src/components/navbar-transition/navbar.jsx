import { motion } from "framer-motion"
import { clipPath } from "framer-motion/client"


export const Navbar = () => {
    const children = {
        hidden: {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        },
        show: (i) => ({
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            transition: {
                ease: [.110, .325, .160, .95],
                delay: Math.random() * (i / 50),
                duration: .6
            }
        }),
        exit:(i) => ({
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            transition: {
                ease: [.645, .045, .355, .8],
                delay: Math.random() * (i / 50),
                duration: .6
            }
        })
    }
    // ========================
    const navLinks = {
        hidden: {
            y: "100%",
        },
        show: {
            y: 0,
            transition: {
                ease: "easeOut",
                delay: .2,
                duration: .4
            }
        },
        exit: {
            y: "100%",
            transition: {
                ease: "easeOut",
                duration: .4
            }
        },
    }
    // ========================
    let currentArray = []
    for (let i = 1; i < 21; i++) {
        currentArray.push(i)
    }
    return (
        <div
            className="w-screen h-screen overflow-hidden fixed inset-0"
        >
            <div className="w-full grid grid-cols-20 grid-rows-1">
                {
                    currentArray.map((_, i) => (
                        <motion.div key={i} 
                            className="w-full h-screen bg-[#811ea5]"
                            variants={children} initial='hidden'
                            animate='show' exit='exit' custom={i}
                        />
                    ))
                }
            </div>
            <section className="w-full h-full absolute inset-0 flex justify-center items-center z-30">
                <ul className="w-[900px] leading-none">
                    <li className="overflow-hidden">
                        <motion.div
                            variants={navLinks}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                        >
                            <a href="" className="text-[80px] hover:text-[#eaeaea]">ART</a>
                        </motion.div>
                    </li>
                    <li className="overflow-hidden">
                        <motion.div
                            variants={navLinks}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                        >
                            <a href="" className="text-[80px] hover:text-[#eaeaea]">TEAM</a>
                        </motion.div>
                    </li>
                    <li className="overflow-hidden">
                        <motion.div
                            variants={navLinks}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                        >
                            <a href="" className="text-[80px] hover:text-[#eaeaea]">STUDIO</a>
                        </motion.div>
                    </li>
                    <li className="overflow-hidden">
                        <motion.div
                            variants={navLinks}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                        >
                            <a href="" className="text-[80px] hover:text-[#eaeaea]">ABOUT</a>
                        </motion.div>
                    </li>
                </ul>
            </section>
        </div>
    )
}
