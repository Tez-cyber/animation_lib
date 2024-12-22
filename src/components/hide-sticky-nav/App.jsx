import { div } from "framer-motion/client";


function App() {
    return (
        <div className="min-h-[300vh] bg-gradient-to-b from-[rgba(255,255,255,.1)] to-[rgba(255,255,255,0)]">
            <Nav />
        </div>
    );
}

const Nav = () => {
    return (
        <div>
            Welcome
        </div>
    )
}


export default App