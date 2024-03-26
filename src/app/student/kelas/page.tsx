import React from "react";
import Image from "next/image";

import { Button } from "flowbite-react";
const Page = () => {
  return (
    <>
      <section className="relative p-4 md:p-5">
        <h1 className="text-2xl font-bold">Kelas yang diikuti</h1>
        <h3>
          Pada bagian ini berisi detail info dari kelas yang telah dibeli
          sebelumnya
        </h3>

        <div className="mt-5 w-[80%]">
          <div className="flex w-full items-center justify-center">
            <Button className="mr-4">SKD</Button>
            <Button outline gradientDuoTone="cyanToBlue">
              Matematika
            </Button>
          </div>

          <div className="mt-3 flex items-center justify-center">
            <div className="inline-block">
              <h1 className="text-xl">Anda Belum Memiliki Kelas</h1>
              <h2 className="text-sm">
                Silahkan beli program terlebih dahulu ya!
              </h2>
            </div>
            <Image
              src={"/img/kelas/kelas_belum_beli_1.png"}
              width={197}
              height={240}
              alt="img-banner"
              className=""
              sizes="(min-width: 920px) 197px, (min-width: 680px) calc(26.36vw - 40px), (min-width: 340px) 30vw, calc(460vw - 1343px)"
            />
          </div>
          <div className="m-auto mt-10 min-h-40 w-[80%] rounded-md border bg-red-200">
            <div className="flex">
              <Image
                src={"/img/kelas/kelas_belum_beli_2.png"}
                width={149}
                height={136}
                alt="img-banner"
                className=""
                sizes="149px"
              />
              <div className="">
                <h1 className="mb-2 text-2xl font-bold">Beli Kelas</h1>
                <h3 className="">Yuk, beli paket sekarang!</h3>

                <h3>
                  Dengan membeli paket kamu akan mendapatkan pengetahuan baru
                  untuk meraih kesuksesanmu.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
