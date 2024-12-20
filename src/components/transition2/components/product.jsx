import { motion } from "framer-motion"

const Product = ({ title, delay }) => {
  return (
    <motion.div
        initial={{
            y: "10px",
            opacity: 0
        }}
        animate={{
            y: 0,
            opacity: 1,
        }}
        transition={{
            duration: .75,
            ease: "easeInOut",
            delay
        }}
        exit={{
            y: "50%",
            opacity: 0,
            transition: {
                duration: .25,
                ease: "easeInOut"
            }
        }}
        className="card text-white relative">
        <div className="absolute bottom-4 left-4">
            <p className="text-4xl">{title}</p>
            <p className="text-sm">This is {title}</p>
        </div>
    </motion.div>
  )
}

export default Product