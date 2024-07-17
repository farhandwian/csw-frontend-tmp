import { TQuestion, TExerciseDetail } from "@/types/exercise";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlagsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Alert } from "flowbite-react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface InformationExerciseProps {
  addLeadingZero: (number: number) => number | string;
  activeQuestion: number;
  questions: TQuestion[];
  result: TExerciseDetail;
  onClickTandaiPertanyaan: () => void;
  formattedTime: string;
}

const InformationExercise = ({
  addLeadingZero,
  activeQuestion,
  questions,
  result,
  onClickTandaiPertanyaan,
  formattedTime,
}: InformationExerciseProps) => {
  const handleTandaiPertanyaan = () => {
    onClickTandaiPertanyaan();
  };

  const [isTandaClicked, setIsTandaClicked] = useState(false);

  const handleHelpIconClick = () => {
    setIsTandaClicked(true);
  };

  const Status = () => {
    if (!result.questions[activeQuestion].status) {
      return "belum-dijawab";
    } else if (result.questions[activeQuestion].isMark) {
      return "ragu-ragu";
    } else {
      return result.questions[activeQuestion].status;
    }
  };
  return (
    <>
      {/* desktop mode */}
      <div className="hidden md:block">
        <div className="mb-5 flex w-[100%] items-center justify-evenly rounded-2xl border-2 bg-white">
          <div className="flex py-[6px]">
            <div className="mr-3">
              <p className={`text-xs font-bold text-[#9CA3AF] md:text-sm`}>
                PERTANYAAN
              </p>
              <p
                className={`mt-[6px] whitespace-nowrap text-sm font-bold text-[#64748B]`}
              >
                NOMOR {addLeadingZero(activeQuestion + 1)}/
                {addLeadingZero(questions.length)}
              </p>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto h-[50px] w-[3px] bg-[#E5E7EB]"></div>

          <div className="hidden w-fit py-[6px]  md:flex">
            <div className="mr-3">
              <p className={`text-xs font-bold text-[#9CA3AF] md:text-sm`}>
                STATUS
              </p>
              <p
                className={`mt-[6px] whitespace-nowrap text-xs font-bold text-[#64748B] md:text-sm`}
              >
                {Status()}
              </p>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto hidden h-[50px] w-[3px] bg-[#E5E7EB] md:block"></div>

          <div className="py-[6px] md:flex ">
            <div className="mr-3">
              <p className={`text-xs font-bold text-[#9CA3AF] md:text-sm`}>
                MARK
              </p>
              <p
                className={`mt-[6px] whitespace-nowrap text-xs font-bold text-[#64748B] md:text-sm`}
              >
                {result.questions[activeQuestion].score}
              </p>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto h-[50px] w-[3px] bg-[#E5E7EB]"></div>

          <div className="flex py-[6px]">
            {isTandaClicked && (
              <Alert
                className="absolute h-[6.25rem] w-[20rem] bg-white text-xs shadow-md"
                color="gray"
                onDismiss={() => setIsTandaClicked(false)}
              >
                Jika Anda ragu - ragu dalam menjawab soal, Anda dapat memberikan
                tanda “Flag” pada navigasi latihan soal dengan cara mengklik
                pada “TANDAI PERTANYAAN”
              </Alert>
            )}
            <div className="mr-3">
              <div
                className={`flex items-center text-xs font-bold text-[#9CA3AF] md:text-sm`}
              >
                TANDA
                <div className="inline-flex text-base">
                  <HelpIcon
                    fontSize="inherit"
                    className="ml-2 cursor-pointer"
                    onClick={handleHelpIconClick}
                  />
                </div>
              </div>
              <div
                className="mt-[6px] cursor-pointer"
                onClick={handleTandaiPertanyaan}
              >
                <div
                  className={`flex items-center text-xs font-bold text-[#64748B] md:text-sm`}
                >
                  <div className="text-xs md:text-base">
                    <EmojiFlagsIcon
                      fontSize="inherit"
                      className=""
                    ></EmojiFlagsIcon>
                  </div>
                  <h1 className="whitespace-nowrap text-xs">
                    TANDAI PERTANYAAN
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto hidden h-[50px] w-[3px] bg-[#E5E7EB] md:block"></div>

          <div className="hidden py-[6px]  md:flex">
            <div className="">
              <p
                className={`whitespace-nowrap text-xs font-bold text-[#9CA3AF] md:text-sm`}
              >
                WAKTU TERSISA
              </p>
              <p
                className={`mt-[6px]  text-xs font-bold text-[#64748B] md:text-sm`}
              >
                {formattedTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile mode */}
      <div className="block md:hidden">
        <div className=" flex w-full justify-end py-[6px]">
          <div className="flex ">
            <p
              className={`whitespace-nowrap text-xs font-bold text-[#9CA3AF] md:text-sm`}
            >
              WAKTU TERSISA :
            </p>
            <p className={`text-xs font-bold text-[#64748B] md:text-sm`}>
              &nbsp;{formattedTime}
            </p>
          </div>
        </div>
        <div className="mb-2 flex w-[100%] items-center justify-evenly rounded-2xl border-2 bg-white md:mb-5">
          <div className=" w-fit py-[6px]  md:flex">
            <div className="mr-3">
              <p className={`text-xs font-bold text-[#9CA3AF] md:text-sm`}>
                NO
              </p>
              <p
                className={`mt-[6px] whitespace-nowrap text-xs font-bold text-[#64748B] md:text-sm`}
              >
                {addLeadingZero(activeQuestion + 1)}/
                {addLeadingZero(questions.length)}
              </p>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto h-[50px] w-[3px] bg-[#E5E7EB] md:block"></div>

          <div className=" w-fit py-[6px]  md:flex">
            <div className="mr-3">
              <p className={`text-xs font-bold text-[#9CA3AF] md:text-sm`}>
                STATUS
              </p>
              <p
                className={`mt-[6px] whitespace-nowrap text-xs font-bold text-[#64748B] md:text-sm`}
              >
                {Status()}
              </p>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto h-[50px] w-[3px] bg-[#E5E7EB] md:block"></div>

          <div className="py-[6px] md:flex ">
            <div className="mr-3">
              <p className={`text-xs font-bold text-[#9CA3AF] md:text-sm`}>
                MARK
              </p>
              <p
                className={`mt-[6px] whitespace-nowrap text-xs font-bold text-[#64748B] md:text-sm`}
              >
                {result.questions[activeQuestion].score}
              </p>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto h-[50px] w-[3px] bg-[#E5E7EB]"></div>

          <div className="relative flex py-[6px]">
            {isTandaClicked && (
              <div className="absolute top-5 h-[8rem] w-[10rem]">
                <div
                  className="absolute -top-5 right-0 cursor-pointer text-lg"
                  onClick={() => setIsTandaClicked(!isTandaClicked)}
                >
                  <CloseIcon fontSize="inherit" />
                </div>
                <div
                  className={`absolute h-[7.25rem] w-[10rem] rounded-md bg-white p-1 text-2xs shadow-md md:text-xs`}
                  color="gray"
                >
                  Jika Anda ragu - ragu dalam menjawab soal, Anda dapat
                  memberikan tanda “Flag” pada navigasi latihan soal dengan cara
                  mengklik pada “TANDAI PERTANYAAN”
                </div>
              </div>
            )}
            <div className="mr-3">
              <div
                className={`flex items-center text-xs font-bold text-[#9CA3AF] md:text-sm`}
              >
                TANDA
                <div className="inline-flex text-base">
                  <HelpIcon
                    fontSize="inherit"
                    className="ml-2 cursor-pointer"
                    onClick={handleHelpIconClick}
                  />
                </div>
              </div>
              <div
                className="mt-[6px] cursor-pointer"
                onClick={handleTandaiPertanyaan}
              >
                <div
                  className={`flex items-center text-xs font-bold text-[#64748B] md:text-sm`}
                >
                  <div className="text-xs md:text-base">
                    <EmojiFlagsIcon
                      fontSize="inherit"
                      className=""
                    ></EmojiFlagsIcon>
                  </div>
                  <h1 className="whitespace-nowrap text-xs md:text-xs ">
                    TANDAI
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* vertical line */}
          <div className="my-auto hidden h-[50px] w-[3px] bg-[#E5E7EB] md:block"></div>
        </div>
      </div>
    </>
  );
};

export default InformationExercise;
