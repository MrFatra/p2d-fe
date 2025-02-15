import { IconCalendarEvent } from "@tabler/icons-react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ImmunizationSchedule() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [events] = useState([
    { date: new Date(2025, 1, 20), title: "Imunisasi Anak", type: "Posyandu" },
    { date: new Date(2025, 1, 25), title: "Donor Darah", type: "Donor Darah" },
  ]);

  // Cek apakah ada event pada tanggal tertentu
  const getEvent = (date) => {
    return events.find((event) => event.date.toDateString() === date.toDateString());
  };

  return (
    <div className="mt-20 mb-20 px-4 w-full">
      <h2 className="text-custom-emerald text-xl font-bold mb-6 text-center">
        Jadwal Imunisasi Anak & Ibu Hamil
      </h2>

      <div className="flex flex-col bg-white shadow-lg items-center justify-center rounded-lg p-4 w-full">
        <Calendar
          onChange={setDate}
          value={date}
          tileContent={({ date, view }) =>
            view === "month" && getEvent(date) ? <div className="text-custom-emerald mt-1">
              <IconCalendarEvent />
            </div> : null
          }
          activeStartDate={new Date(today.getFullYear(), today.getMonth(), 1)} // Kunci bulan saat ini
          minDetail="month"
          maxDetail="month"
          prevLabel={null}
          nextLabel={null}
          className="border-none w-full"
        />

        <div className="mt-4 text-center">
          {getEvent(date) ? (
            <p className="text-lg text-blue-600 font-semibold">
              📅 {getEvent(date).title}
            </p>
          ) : (
            <p className="text-gray-500">Tidak ada jadwal imunisasi</p>
          )}
        </div>
      </div>
    </div >
  );
}
