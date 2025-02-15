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
                className="w-full bg-gradient-to-l from-emerald-300 via-custom-emerald to-custom-emerald lg:px-10 py-4 flex items-center justify-between backdrop-blur-lg fixed top-0 z-50"
            >
                <div className="flex ml-4 opacity-100 items-center gap-3">
                    <img
                        src="/images/logo.png"
                        alt=""
                        className="w-8 rounded-full lg:w-8"
                    />
                    <h1 className="font-bold whitespace-nowrap text-white lg:text-2xl text-2xl">
                        P2D
                    </h1>
                </div>
                <div className="items-center flex gap-10">
                    <div className="hidden lg:flex items-center gap-10 text-zinc-900 font-medium text-sm">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative pb-1 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:rounded-full after:transition-all after:duration-500 ${isActive
                                    ? 'after:bg-white after:w-full'
                                    : 'after:bg-white after:w-0 hover:after:w-full'
                                }`
                            }
                        >
                            Jadwal
                        </NavLink>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative pb-1 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:rounded-full after:transition-all after:duration-500 ${isActive
                                    ? 'after:bg-white after:w-full'
                                    : 'after:bg-white after:w-0 hover:after:w-full'
                                }`
                            }
                        >
                            Konseling
                        </NavLink>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative pb-1 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:rounded-full after:transition-all after:duration-500 ${isActive
                                    ? 'after:bg-white after:w-full'
                                    : 'after:bg-white after:w-0 hover:after:w-full'
                                }`
                            }
                        >
                            Cek Pertumbuhan
                        </NavLink>
                    </div>
                    <div className="">
                        <Link
                            to="/"
                            className="lg:flex hidden bg-shades py-2.5 px-5 rounded-lg font-semibold text-white whitespace-nowrap items-center gap-2 text-sm"
                        >
                            Masuk <IconLogin2></IconLogin2>
                        </Link>
                    </div>
                </div>

                {/* tampilan mobile */}
                <div className="relative lg:hidden mt-2 px-12">
                    {isOpen ? (
                        <>
                            <button onClick={openMenu} className="text-white  ">
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
                                        className="flex lg:hidden bg-shades py-2.5 px-5 rounded-lg font-semibold text-white whitespace-nowrap items-center gap-2"
                                    >
                                        Masuk <IconLogin2></IconLogin2>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <button onClick={openMenu} className="text-white ">
                            <IconMenu2></IconMenu2>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Navbar;