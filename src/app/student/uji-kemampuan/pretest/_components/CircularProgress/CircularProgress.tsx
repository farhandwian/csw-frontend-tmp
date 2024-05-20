"use client";
import { useState } from "react";
import Pie from "./Pie";

interface CircularProgressProps {
  colour?: string;
  percentage: number;
}

export default function CircularProgress({
  colour = "D9A720",
  percentage,
}: CircularProgressProps) {
  const [random, setRandom] = useState({
    percentage: percentage,
    colour: "hsl(0, 0%, 0%)",
  });

  const generateRandomValues = () => {
    const rand = (n: number) => Math.random() * n;
    setRandom({
      percentage: rand(100),
      colour: `hsl(${rand(360)}, ${rand(50) + 50}%, ${rand(30) + 20}%)`,
    });
  };

  return (
    <>
      {/* <Pie percentage={random.percentage} colour={random.colour} /> */}
      <Pie percentage={percentage} colour={colour} />
      {/* other examples... */}
      {/* <Pie percentage={43.6} colour="#3e0" />
      <Pie percentage={"63"} colour="hsl(0,95%,40%)" />
      <Pie percentage={"58u"} colour="red" /> */}
    </>
  );
}
