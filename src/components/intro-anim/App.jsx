import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Loader from "./components/loader";
import { Hero } from "./hero";
import './index.css'


function App() {
    const [loaderFinished, setLoaderFinished] = useState(false);
    const [timeline, setTimeline] = useState(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setLoaderFinished(true);
                }
            });

            setTimeline(tl);
        });

        return () => context.revert();
    }, []);

    return (
        <main>
            {
                loaderFinished ?
                    <Hero /> : <Loader timeline={timeline} />
            }
        </main>
    )
}

export default App