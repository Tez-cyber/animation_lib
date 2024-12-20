import { motion } from "framer-motion"

export const Body = ({ children }) => {
    return (
        <main className="overflow-hidden">
            <motion.p
                initial={{
                    x: "100%",
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                exit={{
                    x: "-100%"
                }}
                transition={{
                    duration: .75,
                }}
            >
                {children}
            </motion.p>
        </main>
    )
}
