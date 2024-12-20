import { useState } from "react"
import { Progress } from "./Progress"
import { Personal, Signup, SocialLinks } from "./Form"

const message = ['Learn React', 'Apply for Jobs', 'Invest Your income']
export const Multi = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Steps />
        </div>
    )
}

const Steps = () => {
    const [steps, setSteps] = useState(1)
    const totalSteps = 3

    const handlePrev = () => {
        if (steps > 1) setSteps(step => step - 1)
    }
    const handleNext = () => {
        if (steps < 3) setSteps(step => step + 1)
    }

    const renderSteps = () => {
        switch(steps) {
            case 1: 
                return <Personal />;
            case 2: 
                return <Signup />;
            case 3: 
                return <SocialLinks />;
            default:
                return null
        }
    }
    return (
        <div className="container w-[550px] bg-black text-white p-[1rem_2rem] rounded-[5px] overflow-hidden">
            <div className="
                progress_container flex justify-between m-[1rem_0] relative text-black
                before:content-[''] before:absolute before:bg-[#ddd] before:h-1
                before:w-full before:top-1/2 before:left-0 before:z-[1]
                before:-translate-y-1/2
            ">
                <Progress totalSteps={totalSteps} step={steps} className="progress" />
                <div
                    className={`${steps >= 1 ? "circle active" : "circle"}`}>1</div>
                <div className={`${steps >= 2 ? "circle active" : "circle"}`}>2</div>
                <div className={`${steps >= 3 ? "circle active" : "circle"}`}>3</div>
            </div>
            <div className="content">
                <h2 className="text-[2rem] p-[2rem_0]">
                    {/* <Message step={steps} /> */}
                    {renderSteps()}
                </h2>
            </div>
            <div
                className="
                    btns flex justify-between m-[1rem_0]
                ">
                <button
                    onClick={handlePrev}
                    className={`${steps <= 1 ? "disabled":"btn"}`}>Prev</button>
                <button
                    onClick={handleNext}
                    className={`${steps === totalSteps ? "disabled":"btn" }`}>Next</button>
            </div>
        </div>
    )
}

function Message({ step }) {
    return <h2>{message[step - 1]}</h2>
}