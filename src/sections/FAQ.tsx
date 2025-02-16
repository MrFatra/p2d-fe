import { IconCircleChevronDown } from "@tabler/icons-react";

const FAQ = () => {
    const faqs = [
        {
            id: "faq1",
            question: "Apa itu P2D?",
            answer: "P2D adalah singkatan dari Pusat Pengembangan Diri yang merupakan tempat untuk mengembangkan diri melalui berbagai kegiatan positif."
        },
        {
            id: "faq2",
            question: "Bagaimana cara bergabung dengan P2D?",
            answer: "Anda bisa mendaftar melalui website resmi P2D atau datang langsung ke kantor kami untuk informasi lebih lanjut."
        },
        {
            id: "faq3",
            question: "Apa saja layanan yang tersedia di P2D?",
            answer: "P2D menyediakan berbagai layanan seperti pelatihan, konsultasi, dan workshop untuk pengembangan diri."
        },
        {
            id: "faq4",
            question: "Apakah ada biaya untuk bergabung?",
            answer: "Tidak ada biaya untuk bergabung dengan layanan P2D, beberapa kegiatan di P2D juga bersifat gratis. Silakan cek informasi lengkapnya di website kami."
        }
    ];

    return (
        <div className="my-28 lg:py-28 md:mx-28 mx-10">
            <div className="lg:flex gap-10 text-foreground">

                <div className="flex flex-col self-center flex-1 lg:mb-0 mb-5 lg:text-left text-center">
                    <p className="text-shades font-bold md:text-2xl text-xl">FAQ</p>
                    <p className="text-xl md:text-3xl font-bold">Punya Pertanyaan Seputar P2D?</p>
                    <p className="font-light mt-2 text-sm md:text-base">
                        Temukan jawaban dari pertanyaan yang sering diajukan langsung di sini untuk informasi tentang layanan, jadwal, dan fasilitas P2D.
                    </p>
                </div>

                <div className="border-2 rounded-lg p-5 border-shades flex-1">
                    <div className="flex flex-col gap-5 w-full">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="group">
                                <label htmlFor={faq.id} className="flex justify-between items-center cursor-pointer">
                                    <div className="text-shades font-bold text-sm md:text-lg flex-1">{faq.question}</div>
                                    <IconCircleChevronDown className="text-shades transform transition-transform duration-200 group-hover:rotate-180" />
                                </label>
                                <input type="checkbox" id={faq.id} className="hidden peer" />
                                <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
                                    <p className="font-light pt-2 text-sm md:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;