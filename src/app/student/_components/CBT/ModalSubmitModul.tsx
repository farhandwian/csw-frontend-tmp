import { GreenButton } from "@/components/Button/GreenButton";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import * as React from "react";
import { Fragment, useState } from "react";
import { GrayButton } from "@/components/Button/GrayButton";
import { TQuiz } from "@/types/quiz";

interface ModalSubmitModul {
  isOpenProp: boolean;
  formattedTime: string;
  unAnsweredQuestions?: number;
  quiz: TQuiz;
  onClose: () => void;
  onSubmit: () => void;
}

export default function ModalSubmitModul({
  isOpenProp,
  formattedTime,
  unAnsweredQuestions,
  quiz,
  onClose,
  onSubmit,
}: ModalSubmitModul) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    onClose();
  }

  function openModal() {
    setIsOpen(true);
  }
  React.useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[200]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mb-2 text-center">
                    <Image
                      width={150}
                      height={150}
                      src="/img/uji-kemampuan/ic_attention.png"
                      className={`m-auto inline-block object-cover`}
                      alt="Logo CSW"
                    />
                  </div>
                  <h1 className="text-center text-xl font-bold">PERHATIAN!!</h1>
                  <p className="mb-4 line-clamp-4 text-center">
                    {`Modul ${quiz.modul} - ${quiz.topic} : ${quiz.description} `}
                  </p>

                  <div
                    className={`flex gap-5 ${
                      unAnsweredQuestions ? "justify-between" : "justify-center"
                    } mb-3`}
                  >
                    <div className="">
                      <h3>Waktu Anda Masih Tersisa:</h3>

                      <h3 className="text-center">{formattedTime}</h3>
                    </div>
                    <div
                      className={`${unAnsweredQuestions ? "block" : "hidden"}`}
                    >
                      <h3>Soal Yang Belum dijawab:</h3>
                      <h3 className="text-center">
                        {unAnsweredQuestions} soal
                      </h3>
                    </div>
                  </div>

                  <GrayButton className="m-auto" onClick={closeModal}>
                    Kembali Ke Latihan Soal
                  </GrayButton>
                  <GreenButton onClick={onSubmit} className="mx-auto mt-3">
                    SUBMIT
                  </GreenButton>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
