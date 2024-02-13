"use client";
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title:
      "OverviewOverviewOverviewOverviewOverviewOverviewOverviewOverviewOverview",
    path: "",
    subBab: "1.1",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title:
          "UsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsersUsers",
        path: "",
        subBab: "1.1",
      },
      {
        title: "Revenue",
        path: "",
        subBab: "1.1",
      },
    ],
  },
  {
    title: "Reports",
    path: "",
    subBab: "1.1",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

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

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

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
