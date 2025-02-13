const Schedule = () => {
  return (
    <div className="mt-20 mb-20 flex flex-col items-center px-4">
      <h2 className="text-custom-emerald text-xl font-bold mb-6 text-center">
        Jadwal Imunisasi Anak & Ibu Hamil
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 w-full max-w-4xl px-4 md:px-0">
        <div className="w-full max-w-[180px] mx-auto h-72 flex flex-col justify-start items-center border-2 text-custom-emerald rounded-lg shadow-sm p-4">
          <span className="text-black font-semibold text-lg mt-2">Senin</span>
        </div>
        <div className="w-full max-w-[180px] mx-auto h-72 flex flex-col justify-start items-center border-2 text-custom-emerald rounded-lg shadow-sm p-4">
          <span className="text-black font-semibold text-lg mt-2">Rabu</span>
        </div>
        <div className="w-full max-w-[180px] mx-auto h-72 flex flex-col justify-start items-center border-2 text-custom-emerald rounded-lg shadow-sm p-4">
          <span className="text-black font-semibold text-lg mt-2">Kamis</span>
        </div>
        <div className="w-full max-w-[180px] mx-auto h-72 flex flex-col justify-start items-center border-2 text-custom-emerald rounded-lg shadow-sm p-4">
          <span className="text-black font-semibold text-lg mt-2">Sabtu</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
