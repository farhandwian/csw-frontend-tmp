import Image from "next/image";
import React from "react";

const ModulCard = () => {
  const moduls = [
    {
      name: "Ayu Lestari",
      title: "Mentor Matematika Terbaik",
      description:
        "Saya salah satu modul yang ahli dalam mengajarkan seputar matematika untuk salah satu syarat test di sekolah kedinasan STIS. “Matematika itu mudah, asik dan seru”",
      imageUrl: "/img/img_mentor.png",
      date: "2023-11-01",
      dateTime: "2023-11-01T09:00",
    },
    {
      name: "Budi Darmawan",
      title: "Mentor Fisika Terapan",
      description:
        "Dengan pengalaman mengajar yang luas, saya siap membantu anda menguasai fisika terapan untuk berbagai tes sekolah kedinasan. “Fisika adalah tentang memahami alam semesta.”",
      imageUrl: "/img/img_mentor.png",
      date: "2023-11-02",
      dateTime: "2023-11-02T09:00",
    },
    {
      name: "Citra Kirana",
      title: "Mentor Kimia Analitik",
      description:
        "Menyukai kimia sejak kecil, saya berdedikasi untuk mengajar anda konsep-konsep kimia analitik yang kompleks dengan cara yang sederhana dan menarik. “Kimia bukan”",
      imageUrl: "/img/img_mentor.png",
      date: "2023-11-03",
      dateTime: "2023-11-03T09:00",
    },
  ];

  return (
    <>
      {moduls.slice(0, 3).map((modul, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden mb-6"
        >
          {/* Use md:flex-row to arrange items side by side on medium screens or larger */}
          <div className="flex flex-row ">
            {/* <div className="relative w-[150px] h-[150px]">
              </div> */}
            <img
              alt={modul.name}
              src={modul.imageUrl}
              className="w-[300px] h-[200px] p-2"
            />

            {/* Use p-6 to pad on all sides, and md:pr-6 md:pl-0 to adjust padding on medium screens */}
            <div className="px-6 py-1 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900">
                  {modul.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {modul.description}
                </p>
                <div className="mt-1">
                  <p className="text-sm font-medium text-gray-900">
                    {modul.name}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={modul.dateTime}>{modul.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModulCard;
