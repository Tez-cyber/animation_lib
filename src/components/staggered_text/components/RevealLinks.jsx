import { motion } from "framer-motion"

export const RevealLinks = () => {
    const DURATION = .25
    const STAGGER = .025
    return (
        <section className="grid h-screen place-content-center gap-2 
                bg-green-300 px-8 text-black"
        >
            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">LinkedIn</FlipLink>
            <FlipLink href="#">Facebook</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
        </section>
    )
}

const DURATION = .25
const STAGGER = .025

const FlipLink = ({ children, href }) => {
    return (
        <motion.a href={href}
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden whitespace-nowrap
            text-4xl font-black uppercase sm:text-7xl md:text-8xl
            lg:text-9xl
        "
        >
            <div>
                {children.split("").map((l, i) => {
                    return <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i
                        }}
                        className="inline-block"
                        key={i}>{l}</motion.span>
                })}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => {
                    return <motion.span
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i
                        }}
                        className="inline-block"
                        key={i}>{l}</motion.span>
                })}
            </div>
        </motion.a>
    )
}