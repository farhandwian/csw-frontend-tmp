"use client";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const SidebarData = [
  {
    title: "Pancasila",
    path: "",
    subBab: "1.1",

    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: "Pengertian Pancasila",
        path: "",
        subBab: "1.1",
      },
      {
        title: "Asal Usul Pancasila",
        path: "",
        subBab: "1.2",
      },
      {
        title: "Sejarah Pancasila",
        path: "",
        subBab: "1.3",
      },
      {
        title: "Lambang dan Nilai Pancasila",
        path: "",
        subBab: "1.4",
      },
      {
        title: "Dimensi Pancasila",
        path: "",
        subBab: "1.5",
      },
      {
        title: "Rumusan Kesatuan Sila Pancasila",
        path: "",
        subBab: "1.6",
      },
      {
        title: "Implementasi Pancasila",
        path: "",
        subBab: "1.7",
      },
      {
        title: "Pancasila Dalam Ketatanegaraan NKRI",
        path: "",
        subBab: "1.8",
      },
      {
        title: "Kedudukan dan Fungsi Pancasila",
        path: "",
        subBab: "1.9",
      },
    ],
  },
  {
    title: "Reports",
    path: "",
    subBab: "1.1",

    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: "Reports",
        path: "",
        subBab: "1.1",

        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "",
        subBab: "1.1",

        cName: "sub-nav",
      },
      {
        title: "Reports 3",
        path: "",
        subBab: "1.1",
      },
    ],
  },
  {
    title: "Products",
    path: "",
    subBab: "1.1",
  },
  {
    title: "Team",
    path: "",
    subBab: "1.1",
  },
  {
    title: "Messages",
    path: "",
    subBab: "1.1",

    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: "Message 1",
        path: "//message1",
        subBab: "1.1",
      },
      {
        title: "Message 2",
        path: "//message2",
        subBab: "1.1",
      },
    ],
  },
  {
    title: "Support",
    path: "",
    subBab: "1.1",
  },
];
