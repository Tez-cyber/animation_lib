import { div } from "framer-motion/client"


export const Navbar = () => {
    let currentArray = []
    for (let i = 1; i < 21; i++) {
        currentArray.push(i)
    }
    console.log(currentArray)
    return (
        <div
            className="w-screen h-screen overflow-hidden fixed"
        >
            <div className="w-full grid grid-cols-20 grid-rows-1">
                {
                    currentArray.map((_, i) => (
                        <div key={i} className="w-full h-full bg-[#811ea5]">

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
