import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Link from "next/link";

export default function ModulFAB({
  alignment,
  handleChange,
}: {
  alignment: string;
  handleChange: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => void;
}) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className="mt-0"
    >
      <ToggleButton value="modul_home">
        <Link href="/student/modul/detail-modul">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 inline-block"
          >
            <path
              d="M10.7127 0.295712C10.6197 0.202011 10.5092 0.127638 10.3874 0.0768846C10.2655 0.0261306 10.1349 0 10.0029 0C9.87092 0 9.74025 0.0261306 9.61842 0.0768846C9.4966 0.127638 9.38603 0.202011 9.2931 0.295712L0.295712 9.2931C0.202011 9.38603 0.127638 9.4966 0.0768846 9.61842C0.0261306 9.74025 0 9.87092 0 10.0029C0 10.1349 0.0261306 10.2655 0.0768846 10.3874C0.127638 10.5092 0.202011 10.6197 0.295712 10.7127C0.389125 10.8053 0.499909 10.8786 0.621711 10.9284C0.743513 10.9781 0.873938 11.0034 1.00551 11.0026H2.00522V18.0006C2.00522 18.5308 2.21587 19.0394 2.59083 19.4144C2.9658 19.7893 3.47435 20 4.00463 20H16.0011C16.5314 20 17.04 19.7893 17.4149 19.4144C17.7899 19.0394 18.0006 18.5308 18.0006 18.0006V11.0026H19.0003C19.2654 11.0026 19.5197 10.8973 19.7072 10.7098C19.8947 10.5223 20 10.268 20 10.0029C20.0007 9.87132 19.9755 9.7409 19.9258 9.61909C19.876 9.49729 19.8027 9.38651 19.7101 9.2931L10.7127 0.295712ZM4.00463 18.0006V8.41335L10.0029 2.4151L16.0011 8.41335V18.0006H4.00463Z"
              fill="#64748B"
            />
          </svg>{" "}
          <h1 className="mt-1 inline-block">Modul Home</h1>
        </Link>
      </ToggleButton>

      <ToggleButton value="nilai">
        <Link href="/student/modul/detail-modul/nilai">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 inline-block"
          >
            <path
              d="M8.75 1.25C12.8906 1.25 16.25 2.37305 16.25 3.75V5C16.25 6.37695 12.8906 7.5 8.75 7.5C4.60938 7.5 1.25 6.37695 1.25 5V3.75C1.25 2.37305 4.60938 1.25 8.75 1.25ZM16.25 7.08984V8.75C16.25 10.127 12.8906 11.25 8.75 11.25C4.60938 11.25 1.25 10.127 1.25 8.75V7.08984C2.86133 8.22266 5.81055 8.75 8.75 8.75C11.6895 8.75 14.6386 8.22266 16.25 7.08984ZM16.25 10.8398V12.5C16.25 13.877 12.8906 15 8.75 15C4.60938 15 1.25 13.877 1.25 12.5V10.8398C2.86133 11.9727 5.81055 12.5 8.75 12.5C11.6895 12.5 14.6386 11.9727 16.25 10.8398ZM16.25 14.5898V16.25C16.25 17.627 12.8906 18.75 8.75 18.75C4.60938 18.75 1.25 17.627 1.25 16.25V14.5898C2.86133 15.7227 5.81055 16.25 8.75 16.25C11.6895 16.25 14.6386 15.7227 16.25 14.5898ZM8.75 0C5.69758 0 0 0.734414 0 3.75V16.25C0 19.271 5.70687 20 8.75 20C11.8024 20 17.5 19.2656 17.5 16.25V3.75C17.5 0.728984 11.7931 0 8.75 0Z"
              fill="#64748B"
            />
          </svg>{" "}
          nilai
        </Link>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
