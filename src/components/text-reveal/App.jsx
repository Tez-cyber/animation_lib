import './reveal.css'

const App = () => {
    return (
        <>
            <nav>
                <div className="col">
                    <div className="sub-col">
                        <span>Greyloom</span>
                    </div>
                    <div className="sub-col">
                        <span>Home</span>
                        <span>About</span>
                        <span>Projects</span>
                        <span>Lab</span>
                    </div>
                </div>
                <div className="col">
                    <span>Let's have a talk</span>
                </div>
            </nav>

            {/* Hero section */}
            <section className="hero">
                <div className="hero-img">
                    <img src="/end.jpg" alt="" />
                </div>
                <div className='header'>
                    <h1>We craft identities and experiences for the bold</h1>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <span>Design & Strategy for the Vision-Driven</span>

                <div className="header">
                    <h1>
                        We partner with founders, innovators, and change-makers to shape
                        brands that resonate. From the first lines of code to global launches,
                        we bring focus, elegance and intent to every stage.
                    </h1>
                </div>
            </section>

            {/* About section img */}
            <section className="about-img">
                <img src="/end.jpg" alt="" />
            </section>

            {/* Story Section */}
            <section className="story">
                <div className="col">
                    <h1>The story Behind <br /> Our Stillness</h1>
                </div>
                <div className="col">
                    <p>
                        Greyloom was born from a simple idea: that creativity, when wielded
                        with intention, can quietly reshape the world. In an era of
                        overstimulation and fleeting trends, we chose a different path. One
                        of clarity, restraint and long-form vision.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem
                        suscipit temporibus perspiciatis. Placeat, enim illo. Nemo illum
                        repudiandae tenetur quas beatae quaerat dolores praesentium iusto
                        quod tempora repellat culpa quae consequuntur quasi ad voluptatibus
                        odio sed alias fugiat perspiciatis, quos doloremque saepe? Nihil modi
                        sint autem alias similique rem. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam rem
                    </p>
                    <p>
                        We dont chase  virality. We dont trade in noise. We build for the
                        long-haul: timeless identities, seamless digital experiences, and
                        strategies that evolve with clarity and purpose. Greyloom exists for
                        those who believe that the most enduring ideas dont demand 
                        attention. They earn it
                    </p>
                </div>
            </section>

            {/* Philosophy section */}
            <section className="philosophy">
                <span>The Thought Beneath</span>

                <div className="header">
                    <h1>
                        We believe in the power of quiet convistion. In work that speaks
                        softly but lingers long. In design as a tool for clarity, not
                        decoration. We believe that the best ideas dont demand attentiong.
                        Our philosophy is simple. Create with purpose.
                    </h1>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="col">
                    <div className="sub-col">
                        <span>Terms & Conditions</span>
                    </div>
                    <div className="sub-col">
                        <h1>Twitter</h1>
                        <h1>LinkedIn</h1>
                        <h1>Instagram</h1>
                        <h1>Awwwards</h1>
                        <h1>Email</h1>
                    </div>
                </div>
                <div className="col">
                    <span>Copyright Greyloom 2025</span>
                </div>
            </footer>
        </>
    )
}

export default App
