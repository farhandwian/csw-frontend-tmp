"use client";

import Studentlayout from "@/app/components/StudentLayout";
import GlobalStyles from "@/app/Globals.module.css";

import React, { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import Link from "next/link";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const page = () => {
  const [alignment, setAlignment] = useState("nilai");

  //   const router = useRouter();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    // switch (newAlignment) {
    //   case "modul_name":
    //     router.push("/student/modul/detail-modul");
    //   case "nilai":
    //     router.push("/student/modul/detail-modul/nilai");
    // }
  };
  return (
    <Studentlayout>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="modul_home">
          <Link href="/student/modul/detail-modul">Modul Home</Link>
        </ToggleButton>

        <ToggleButton value="nilai">
          <Link href="/student/modul/detail-modul/nilai">nilai</Link>
        </ToggleButton>
      </ToggleButtonGroup>
      <section className="relative">
        <h1></h1>
        <p className={`${GlobalStyles["light-sm-typography"]}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dicta
          suscipit aut porro! Debitis, quaerat. Harum quidem dicta sequi odit
          repellat quam dolorem nemo, exercitationem optio iste laudantium
          incidunt enim ipsam. Iusto repellendus, dicta corrupti quae qui cum
          magnam enim molestias doloribus, minus iste ratione inventore et id
          nihil quisquam illo? In nihil sunt laborum ipsa pariatur, quo amet
          autem odio suscipit architecto tenetur exercitationem nobis veritatis
          placeat quod earum doloribus nesciunt necessitatibus beatae quasi
          natus laudantium eligendi! Enim, itaque sed? Dolores dignissimos iste
          adipisci incidunt. Obcaecati magnam at ipsa assumenda optio nulla eum
          esse vero mollitia. Sequi, est quia.
        </p>
      </section>
    </Studentlayout>
  );
};

export default page;
