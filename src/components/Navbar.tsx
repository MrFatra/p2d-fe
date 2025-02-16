import { IconLogin2, IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <section>
            <div
                id="nav"
                className="w-full bg-gradient-to-l from-emerald-300 via-custom-emerald to-custom-emerald lg:px-10 py-4 flex items-center justify-between backdrop-blur-lg fixed top-0 z-50"
            >
                <div className="flex ml-4 items-center gap-3">
                    <img src="/images/logo.png" alt="" className="w-8 rounded-full lg:w-8" />
                    <h1 className="font-bold whitespace-nowrap text-white lg:text-2xl text-2xl">P2D</h1>
                </div>

                {/* Desktop Menu */}
                <div className="items-center hidden lg:flex gap-10 text-white font-medium text-sm">
                    {["Jadwal", "Konseling", "Cek Pertumbuhan"].map((item, index) => (
                        <NavLink
                            key={index}
                            to="/"
                            className={({ isActive }) =>
                                `relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:rounded-full after:transition-all after:duration-500 ${isActive
                                    ? "after:bg-white after:w-full"
                                    : "after:bg-white after:w-0 hover:after:w-full"
                                }`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                    <Link
                        to="/"
                        className="lg:flex hidden bg-shades py-2.5 px-5 rounded-lg font-semibold text-white whitespace-nowrap items-center gap-2 text-sm"
                    >
                        Masuk <IconLogin2 />
                    </Link>
                </div>


                {/* Mobile Menu */}
                <div className="relative lg:hidden px-5">
                    <button onClick={toggleMenu} className="text-white transition-transform duration-300">
                        <div className={isOpen ? "rotate-180 transition-transform duration-500" : "rotate-0 transition-transform duration-500"}>
                            {isOpen ? <IconX /> : <IconMenu2 />}
                        </div>
                    </button>

                    <div
                        className={`absolute right-0 top-8 bg-white z-20 rounded-lg shadow-lg w-48 transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="flex flex-col justify-center items-center gap-3 py-3 px-5">
                            {["Jadwal", "Konseling", "Cek Pertumbuhan"].map((item, index) => (
                                <NavLink key={index} to="/" className="text-shades text-sm hover:underline focus:underline">
                                    {item}
                                </NavLink>
                            ))}
                            <Link
                                to="/"
                                className="bg-shades py-2 px-5 rounded-lg font-medium text-white flex items-center gap-2 text-sm"
                            >
                                Masuk <IconLogin2 />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
