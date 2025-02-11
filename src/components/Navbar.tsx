import { IconLogin2, IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function openMenu() {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const navigate = useNavigate();

    return (
        <section>
            <div
                id="nav"
                className="w-full bg-gradient-to-l  from-white/45 via-custom-emerald to-custom-emerald  lg:px-28 py-3 flex items-center justify-between backdrop-blur-lg fixed top-0 z-50 "
            >
                <div className="flex ml-4 opacity-100 items-center gap-3">
                    <img
                        src="/public/images/logo.png"
                        alt=""
                        className="w-8 rounded-full lg:w-8"
                    />
                    <h1 className="font-bold whitespace-nowrap text-white lg:text-3xl text-2xl">
                        P2D
                    </h1>
                </div>
                <div className="items-center flex">
                    <div className="hidden lg:flex items-center gap-14 mt-2 text-zinc-900 font-semibold">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                                    : "text-white  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
                            }
                        >
                            Jadwal
                        </NavLink>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                                    : "text-white  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
                            }
                        >
                            Konseling
                        </NavLink>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-white after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                                    : "text-white  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
                            }
                        >
                            Cek Pertumbuhan
                        </NavLink>
                    </div>
                    <div className="lg:ml-32">
                        <Link
                            to="/"
                            className="lg:flex hidden bg-shades py-2.5 px-5 rounded-lg font-bold text-white whitespace-nowrap items-center gap-2"
                        >
                            Sign-In <IconLogin2></IconLogin2>
                        </Link>
                    </div>
                </div>

                {/* tampilan mobile */}
                <div className="relative lg:hidden mt-2 px-12">
                    {isOpen ? (
                        <>
                            <button onClick={openMenu} className="text-black  ">
                                <IconX></IconX>
                            </button>
                            <div className="top-8 absolute right-2 bg-white z-20 rounded-lg shadow-lg px-3 py-2">
                                <div className="flex flex-col justify-center items-center gap-2 py-2 px-4">
                                    <NavLink to="/" className="text-zinc-800">
                                        Jadwal
                                    </NavLink>
                                    <NavLink to="/e-learning" className="text-zinc-800">
                                        Konseling
                                    </NavLink>
                                    <NavLink to="/contact" className="text-zinc-800">
                                        Pertumbuhan
                                    </NavLink>
                                    <Link
                                        to="/"
                                        className="flex lg:hidden bg-shades py-2.5 px-5 rounded-lg font-bold text-white whitespace-nowrap items-center gap-2"
                                    >
                                        Sign-In <IconLogin2></IconLogin2>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <button onClick={openMenu} className="text-black ">
                            <IconMenu2></IconMenu2>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Navbar;