import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";



const Main = () => {
  return (
    <>
    <Navbar/> 
      <div className="flex w-full">
      <nav className="background w-[20%] text-blue-700 hover:text-red-600 text-2xl">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    <Outlet />
      </div>
    </>
  )
};

export default Main;