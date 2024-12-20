import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between font-normal text-[1.5vw]">
        <div className="m-[2em]">
            <a to="/" className="nav-link">Tez_cyber</a>
        </div>
        <div className="flex">
            <div className="m-[2em]">
                <Link to="/" className="nav-link">Home</Link>
            </div>
            <div className="m-[2em]">
                <Link to="/about" className="nav-link">About</Link>
            </div>
            <div className="m-[2em]">
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar