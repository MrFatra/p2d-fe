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
      <div className="lg:mt-24 mt-24 gap-14 justify-center flex lg:flex-wrap items-center px-6 lg:px-20 text-foreground">
        {/* Konten Teks */}
        <div className="w-full self-center lg:w-1/3">
          <h3 className="text-xl font-semibold md:text-xl lg:text-xl text-custom-emerald underline">
            Posyandu Peduli Desa
          </h3>
          <h2 className="font-bold text-3xl mb-4 mt-2 lg:text-2xl">
            Merangkul Keluarga untuk Masa Depan Sehat Bersama.
          </h2>
          <Link
            to="/"
            className="flex items-center justify-center gap-3 mt-5 lg:mt-10 w-1/2 border-2 border-custom-emerald py-2.5 px-5 rounded-lg font-bold text-custom-emerald hover:shadow-lg hover:shadow-custom-emerald"
          >
            Ayo Mulai <IconArrowRight />
          </Link>
        </div>
        {/* Gambar Ilustrasi */}
        <div className="hidden lg:block lg:w-1/2 lg:pl-10">
          <img
            src="images/hero.png"
            alt="E-Learning Illustration"
            className="w-full mx-auto lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
