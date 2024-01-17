import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <>
      <Accordion className="w-[80%] mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Masalah apa yang Anda selesaikan??</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cukup datang ke lokasi, anda sudah masuk ke kampus STIS, mudah kan?
            hehehe
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-[80%] mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            Bagaimana cara agar bisa masuk STIS tanpa tes?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cukup datang ke lokasi, anda sudah masuk ke kampus STIS, mudah kan?
            hehehe
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-[80%] mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Apa saja yang terdapat di website ini??</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cukup datang ke lokasi, anda sudah masuk ke kampus STIS, mudah kan?
            hehehe
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-[80%] mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Apa saja yang terdapat di website ini??</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cukup datang ke lokasi, anda sudah masuk ke kampus STIS, mudah kan?
            hehehe
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
    </>
  );
}
