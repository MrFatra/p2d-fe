import { IconPhone } from "@tabler/icons-react";

const Footer = () => {
    return (
        <div className="mt-28 px-5 md:px-10 lg:px-20 xl:px-28 py-20 bg-gradient-to-br from-custom-emerald to-emerald-300 text-white">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                
                <div className="flex flex-col gap-5 flex-1">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/logo.png"
                            alt="Logo P2D"
                            className="w-8 h-8 rounded-full"
                        />
                        <p className="text-xl md:text-2xl font-bold">P2D</p>
                    </div>
                    <p className="text-xs md:text-sm font-light max-w-md">
                        "Posyandu Peduli Desa berkomitmen memberikan layanan kesehatan terbaik untuk ibu hamil, balita, dan masyarakat. Bersama, kita bangun masa depan yang lebih sehat, cerdas, dan berkualitas demi kesejahteraan generasi mendatang."
                    </p>
                </div>

                <div className="flex flex-col flex-1 items-center">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-2xl font-bold mb-5">Menu</p>
                        <ul className="flex flex-col gap-2 md:items-start items-center">
                            <li className="font-medium underline hover:text-gray-200 transition-colors">
                                <a href="#jadwal">Jadwal</a>
                            </li>
                            <li className="font-medium underline hover:text-gray-200 transition-colors">
                                <a href="#konseling">Konseling</a>
                            </li>
                            <li className="font-medium underline hover:text-gray-200 transition-colors">
                                <a href="#cek-pertumbuhan">Cek Pertumbuhan</a>
                            </li>
                            <li className="font-medium underline hover:text-gray-200 transition-colors">
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center md:items-start">
                    <p className="text-2xl font-bold mb-5">Konseling</p>
                    <p className="text-xs md:text-sm font-light text-center md:text-left max-w-md">
                        "Berbagi cerita dan konsultasi dengan bidan kami untuk solusi terbaik. Kami siap mendampingi kesehatan Anda dan buah hati."
                    </p>
                    <div className="flex gap-3 rounded-lg border py-2 px-3 mt-5 hover:bg-white/10 transition-colors cursor-pointer lg:text-base text-sm">
                        <IconPhone size={20} />
                        <p>Hubungi Kami</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center text-xs md:text-sm font-light">
                &copy; {new Date().getFullYear()} P2D. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;