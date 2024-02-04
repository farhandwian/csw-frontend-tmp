import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
// import { Button } from "@mui/base/Button";
import Image from "next/image";

import Button from "@mui/material/Button";

import SubmitButton from "@/app/components/SubmitButton";

import PrevButton from "@/app/components/PrevButton";
import Link from "next/link";

import { redirect } from "next/navigation";

export default function ModalSubmitModul({
  isOpen,
  formattedTime,
  unAnsweredQuestions,
  onClose,
}: {
  isOpen: boolean;
  formattedTime: string;
  unAnsweredQuestions?: number;
  onClose: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  let isSubmitClicked = isOpen;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const onClickSubmit = () => {};
  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={style}>
          <div className="m-auto">
            <Image
              width={150}
              height={150}
              src="/img/uji-kemampuan/ic_attention.png"
              className={`object-cover inline-block`}
              alt="Logo CSW"
            />
          </div>
          <h1 className="text-xl font-bold text-center">PERHATIAN!!</h1>
          <p className="text-center mb-4">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div
            className={`flex gap-5 ${
              unAnsweredQuestions ? "justify-between" : "justify-center"
            } `}
          >
            <div className="">
              <h3>Waktu Anda Masih Tersisa:</h3>

              <h3 className="text-center">{formattedTime}</h3>
            </div>
            <div className={`${unAnsweredQuestions ? "block" : "hidden"}`}>
              <h3>Soal Yang Belum dijawab:</h3>
              <h3 className="text-center">{unAnsweredQuestions} soal</h3>
            </div>
          </div>

          <ChildModal />

          <PrevButton
            className="bg-gray-400 text-white"
            onClick={() => onClose()}
            variant="contained"
          >
            Kembali Ke Latihan Soal
          </PrevButton>
        </ModalContent>
      </Modal>
    </div>
  );
}

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClickKembaKeLatihan = () => {};

  function navigate(data: FormData) {
    redirect(`/student/modul}`);
  }

  return (
    <React.Fragment>
      {/* <ModalButton onClick={handleOpen}>Open Child Modal</ModalButton> */}
      <SubmitButton
        className="bg-customPalette-GreenButton text-white"
        onClick={handleOpen}
        variant="contained"
      >
        SUBMIT
      </SubmitButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={[style, { width: "440px" }]}>
          <div className="m-auto">
            <Image
              width={150}
              height={150}
              src="/img/uji-kemampuan/ic_success_latsol.gif"
              className={`object-cover inline-block`}
              alt="Logo CSW"
            />
          </div>
          <h2 className="text-xl font-bold text-center">
            Yeay!!! Selamat kamu telah menyelesaikan Latihan
          </h2>

          <h3 className="mb-2">
            Nilai akan langsung muncul dan kamu bisa melihatnya di halaman awal
            latihan modul materi 1 Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s
          </h3>

          <form className="m-auto" action={navigate}>
            <Button
              className="bg-customPalette-RoyalBlue ml-2 text-white"
              onClick={() => {}}
              variant="contained"
            >
              Kembali ke Latihan Modul Materi 1
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 460,
};

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled(Button)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
`
);

const ModalButton = styled(Button)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`
);
