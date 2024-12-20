import { motion } from "framer-motion"

export const Title = ({ children, delay = 0 }) => {
  return (
    <header className="overflow-hidden">
        <motion.h1
            initial={{
                y: "100%"
            }}
            animate={{
                y: 0
            }}
            exit={{
                y: "-100%"
            }}
            transition={{
                duration: 0.5,
                delay
            }}
            className="">{children}</motion.h1>
    </header>
  )
}
