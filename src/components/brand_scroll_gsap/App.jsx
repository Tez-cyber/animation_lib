import './brand.css'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Card = ({ title, copy, index }) => {
    return (
        <div className="card" id={`card-${index + 1}`}>
            <div className="card-inner">
                <div className="card-content">
                    <h1>{title}</h1>
                    <p>{copy}</p>
                </div>
                <div className="card-img">
                    <img src="/end.jpg" alt={title} />
                </div>
            </div>
        </div>
    )
}

const App = () => {
    const cards = [
        {
            title: "Brand Foundation",
            copy: `The heart of your company's story. It shapes
            your vision, values and voice, ensuring a clear
            and powerful  impact in every interaction
            `
        },
        {
            title: "Design Identity",
            copy: `Your brand's visual fingerprint. It crafts a 
            distinctive look that sparks recognition and
            builds emotional connections with your audience
            `
        },
        {
            title: "Digital Presence",
            copy: `Our web solutions combine cutting-edge
            design and seamless functionality to create
            experiences that captivate and inspire your audience
            `
        },
        {
            title: "Product Design",
            copy: `We craft user-first products that are both 
            functional and visually appealing, delivering
            solutions that leave a lasting impression
            `
        },
    ]

    const containerRef = useRef();
    useGSAP(() => {
        const cards = gsap.utils.toArray(".card");

        ScrollTrigger.create({
            trigger: cards[0],
            start: "top 35%",
            endTrigger: cards[cards.length - 1],
            end: "top 30%",
            pin: ".intro",
            pinSpacing: false
        });

        cards.forEach((card, index) => {
            const isLastCard = index === cards.length - 1;
            const cardInner = card.querySelector(".card-inner");

            if (!isLastCard) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 35%",
                    endTrigger: ".outro",
                    end: "top 65%",
                    pin: true,
                    pinSpacing: false
                });

                gsap.to(cardInner, {
                    y: `-${(cards.length - index) * 14}vh`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 35%",
                        endTrigger: ".outro",
                        end: "top 65%",
                        scrub: true
                    }
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, {
        scope: containerRef
    })
    return (
        <ReactLenis root>
            <div ref={containerRef}>
                <section className="hero" >
                    <img src="/end.jpg" alt="" />
                </section>
                <section className="intro">
                    <h1>
                        Creating standout brands for startups that
                        bring joy and leave lasting impressions
                    </h1>
                </section>
                <section className="cards">
                    {
                        cards.map((card, index) => (
                            <Card key={index} {...card} index={index} />
                        ))
                    }
                </section>
                <section className="outro">
                    <h1>Let's build a brand that leaves a mark</h1>
                </section>
            </div>
        </ReactLenis>
    )
}

export default App