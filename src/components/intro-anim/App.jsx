import { useState } from "react";
import { gsap } from "gsap";

import Loader from "./components/loader";
import { Hero } from "./hero";
import './index.css'


function App() {
    const [loaderFinished, setLoaderFinished] = useState(false)

    return(
        <main>
            <Loader />
            <Hero />
        </main>
    )
}

export default App