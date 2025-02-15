import { IconLogin } from "@tabler/icons-react";
import { useState } from "react";

const Login = () => {
    const [visiblePass, setVisiblePass] = useState(false)

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full h-full bg-gray-200">
                <img src="https://placehold.co/100" alt="" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-center w-full h-full p-28 text-foreground">
                <p className="text-shades font-bold text-3xl">Posyandu Peduli Desa (P2D)</p>
                <p className="text-2xl font-bold mt-5">Selamat Datang!</p>
                <p className="text-gray-500 font-medium mb-5">Silahkan isi form dibawah ini.</p>
                <form className="flex flex-col w-full">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="NIK">
                            NIK
                        </label>
                        <input className="shadow appearance-none border rounded-lg w-full p-3 leading-tight focus:outline-none focus:shadow-outline" id="NIK" type="text" placeholder="NIK" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded-lg w-full p-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={visiblePass ? 'text' : "password"}
                            placeholder="******************"
                        />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex justify-between items-center mb-10 mt-2">
                        <div className="inline-flex items-center">
                            <label
                                className="relative flex cursor-pointer items-center rounded-full mr-3"
                            >
                                <input
                                    id="seePass"
                                    type="checkbox"
                                    className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-shades checked:bg-shades checked:before:bg-slate-400 hover:before:opacity-10"
                                    onChange={(v) => setVisiblePass(v.target.checked)}
                                />
                                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>
                            <label htmlFor="seePass" className="cursor-pointer text-sm font-medium text-gray-500">
                                Lihat Password
                            </label>
                        </div>
                        <a className="inline-block align-baseline font-bold text-sm text-shades hover:underline" href="#">
                            Lupa Password?
                        </a>
                    </div>
                    <button className="flex w-full items-center justify-center gap-3 bg-shades hover:bg-shades/70 hover:cursor-pointer text-white font-bold py-3 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        Login
                        <IconLogin />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;