import { Link } from "react-router-dom";
import logo from "../imgs/logo-transparent.svg";
import { useState } from "react";


function Navbar() {

    const [searchBoxVisible, setSearchBoxVisible] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="py-2 w-[90%] mx-auto font-gelasio">

            <nav className="flex items-center justify-between">

                <Link className="">
                    <img src={logo} alt="Logo" className="w-28 h-12" />
                </Link>

                <div className={"absolute flex flex-col top-[-100%] w-[90%] border lg:flex-row lg:border-none lg:top-0 lg:w-[35%] gap-2 py-2 lg:py-0 lg:relative " + (toggleMenu ? "top-[69px]" : "top-[-100%]")}>
                    <Link to="/" className="px-3 py-3 lg:py-5">Home</Link>
                    <Link to="/" className="px-3 py-3 lg:py-5">My Projects</Link>
                    <Link to="/" className="px-3 py-3 lg:py-5">About Me</Link>
                    <Link to="/" className="px-3 py-3 lg:py-5">Contact Me</Link>

                    <div className="lg:hidden flex items-center px-3 py-2 border-t gap-5">
                        <Link className="flex-1 lg:hidden flex gap-2 items-center bg-gray-50 px-5 py-3 rounded-sm">
                            <i className="fi fi-rr-file-edit"></i>
                            <p>Write</p>
                        </Link>

                        <Link className="flex-1 lg:hidden bg-transparent text-red-700 border border-red-700 px-5 text-center py-2 flex items-center justify-center font-semibold rounded-sm">
                            Sign In
                        </Link>

                        <Link className="flex-1 bg-red-700 text-white px-5 text-center py-2 lg:hidden flex items-center justify-center font-semibold rounded-sm">
                            Sign Up
                        </Link>
                    </div>
                </div>

                <div className={"absolute w-[90%] md:w-[50%] md:mx-auto lg:mx-0 lg:w-[22%] md:left-0 md:right-0 md:top-0 md:relative md:flex items-center border border-red-700 rounded-md " + (searchBoxVisible ? "top-20" : "top-[-100%]")}>
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border-r border-red-700 w-[90%] px-4 py-2 rounded-l-md"
                        />

                        <i className="fi fi-rr-search text-xl px-5 pt-2.5"></i>
                    </div>
                </div>

                <div
                    className="flex items-center gap-5">

                    <button className='md:hidden bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center' onClick={() => setSearchBoxVisible(currentVal => !currentVal)}>
                        <i className="fi fi-rr-search text-xl"></i>
                    </button>

                    <Link className="hidden lg:flex gap-2 items-center">
                        <i className="fi fi-rr-file-edit"></i>
                        <p>Write</p>
                    </Link>

                    <Link className="hidden bg-transparent text-red-700 border border-red-700 w-20 text-center h-10 lg:flex items-center justify-center font-semibold rounded-md">
                        Sign In
                    </Link>

                    <Link className="bg-red-700 text-white w-20 text-center h-10 hidden lg:flex items-center justify-center font-semibold rounded-md">
                        Sign Up
                    </Link>

                    <button className="lg:hidden font-semibold rounded-md pt-3">
                        <i className="fi fi-br-bars-staggered text-3xl text-gray-700" onClick={() => setToggleMenu(currentToggle => !currentToggle)}></i>
                    </button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
