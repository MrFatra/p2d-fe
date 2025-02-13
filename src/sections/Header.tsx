import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section
      id="e-learning"
      className="lg:mt-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      <div className="lg:mt-24 mt-24 gap-14 justify-center flex flex-wrap items-center px-6 lg:px-20">
        {/* Konten Teks */}
        <div className="w-full self-center lg:w-1/3">
          <h3 className="text-xl font-semibold md:text-xl lg:text-xl text-custom-emerald underline">
            Posyandu Peduli Desa
          </h3>
          <h2 className="font-semibold text-lg mb-4 mt-2 lg:text-3xl">
            Merangkul Keluarga untuk Masa Depan Sehat Bersama
          </h2>
          <Link
            to="/"
            className="lg:flex mt-10 w-1/2 hidden border-2 border-custom-emerald py-2.5 px-5 rounded-lg font-bold text-custom-emerald  items-center hover:shadow-lg hover:shadow-custom-emerald"
          >
            Ayo Mulai <IconArrowRight className="ml-5" />
          </Link>
        </div>
        {/* Gambar Ilustrasi */}
        <div className="hidden lg:block lg:w-1/2 lg:pl-10">
          <img
            src="/public/images/hero.png"
            alt="E-Learning Illustration"
            className="w-full mx-auto lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
