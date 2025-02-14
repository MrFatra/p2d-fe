import { IconCircleCheckFilled } from "@tabler/icons-react";

const About = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center gap-5 p-8 bg-emerald-50">
      {/* Gambar */}
      <div className="flex-1 flex justify-center">
        <img
          src="/images/nurses-about.png"
          alt="Healthcare Illustration"
          className="max-w-xs md:max-w-sm"
        />
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col flex-1 gap-5 text-foreground">
        <h2 className="text-custom-emerald text-3xl font-bold">Tentang Kami</h2>
        <p className="font-light">
          Posyandu Peduli Desa Muncangela menyediakan layanan kesehatan
          (timbangan, balita, imunisasi, konsultasi gizi, dan pemeriksaan tumbuh
          kembang). Kami berkomitmen menciptakan generasi sehat dan berkualitas.
        </p>

        <h3 className="text-custom-emerald font-semibold mt-4">
          Layanan, Fasilitas, dan Kelebihan Posyandu Peduli Desa Muncangela:
        </h3>

        <ul className=" space-y-5 font-medium">
          <li className="flex items-center gap-2">
            <span className="text-green-300">
              <IconCircleCheckFilled />
            </span>{" "}
            Fasilitas yang lengkap dan terawat.
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-300">
              <IconCircleCheckFilled />
            </span>{" "}
            Tenaga kesehatan yang profesional dan responsif.
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-300">
              <IconCircleCheckFilled />
            </span>{" "}
            Pelayanan yang cepat dan bersahabat.
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-300">
              <IconCircleCheckFilled />
            </span>{" "}
            Akses mudah dan terjangkau untuk semua.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
