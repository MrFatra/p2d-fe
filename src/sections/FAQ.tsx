import { IconCirclePlus } from "@tabler/icons-react";

const FAQ = () => {
    return (
        <div className="my-28 md:mx-28 mx-10">
            <div className="lg:flex gap-10">

                <div className="flex flex-col self-center flex-1 lg:mb-0 mb-5 lg:text-left text-center">
                    <p className="text-shades font-bold md:text-2xl text-xl">FAQ</p>
                    <p className="text-2xl md:text-3xl font-bold">Punya Pertanyaan Seputar P2D?</p>
                    <p className="font-light mt-2 text-sm md:text-base">Temukan jawaban dari pertanyaan yang sering diajukan langsung di sini untuk informasi tentang layanan, jadwal, dan fasilitas P2D.</p>
                </div>

                <div className="border-2 rounded-lg p-5 border-shades flex-1">
                    <div className="flex flex-col gap-5 w-full">
                        
                        <div className="group">
                            <label htmlFor="faq1" className="flex justify-between items-center cursor-pointer">
                                <p className="text-shades font-bold">Apa itu P2D?</p>
                                <span className="text-shades transform transition-transform duration-200 group-hover:rotate-180">
                                    <IconCirclePlus />
                                </span>
                            </label>
                            <input type="checkbox" id="faq1" className="hidden peer" />
                            <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
                                <p className="font-light pt-2 text-sm md:text-base">
                                    P2D adalah singkatan dari Pusat Pengembangan Diri yang merupakan tempat untuk mengembangkan diri melalui berbagai kegiatan positif.
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="faq2" className="flex justify-between items-center cursor-pointer">
                                <p className="text-shades font-bold">Bagaimana cara bergabung dengan P2D?</p>
                                <span className="text-shades transform transition-transform duration-200 group-hover:rotate-180">
                                    <IconCirclePlus />
                                </span>
                            </label>
                            <input type="checkbox" id="faq2" className="hidden peer" />
                            <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
                                <p className="font-light pt-2 text-sm md:text-base">
                                    Anda bisa mendaftar melalui website resmi P2D atau datang langsung ke kantor kami untuk informasi lebih lanjut.
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="faq3" className="flex justify-between items-center cursor-pointer">
                                <p className="text-shades font-bold">Apa saja layanan yang tersedia di P2D?</p>
                                <span className="text-shades transform transition-transform duration-200 group-hover:rotate-180">
                                    <IconCirclePlus />
                                </span>
                            </label>
                            <input type="checkbox" id="faq3" className="hidden peer" />
                            <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
                                <p className="font-light pt-2 text-sm md:text-base">
                                    P2D menyediakan berbagai layanan seperti pelatihan, konsultasi, dan workshop untuk pengembangan diri.
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="faq4" className="flex justify-between items-center cursor-pointer">
                                <p className="text-shades font-bold">Apakah ada biaya untuk bergabung?</p>
                                <span className="text-shades transform transition-transform duration-200 group-hover:rotate-180">
                                    <IconCirclePlus />
                                </span>
                            </label>
                            <input type="checkbox" id="faq4" className="hidden peer" />
                            <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
                                <p className="font-light pt-2 text-sm md:text-base">
                                    Tidak ada biaya untuk bergabung dengan layanan P2D, beberapa kegiatan di P2D juga bersifat gratis, Silakan cek informasi lengkapnya di website kami.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;