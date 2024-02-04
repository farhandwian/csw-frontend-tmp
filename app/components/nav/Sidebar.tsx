"use client";
// Import necessary modules from MUI and React
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
3;
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Import icons for the list items
// import DashboardIcon from "@mui/icons-material/Dashboard";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

import Contact from "../../student/contact/page";
// import Subscription from "../../student/dashboard/page";

import Breadcrumbs from "../Breadcrumbs";

import Image from "next/image";

import Link from "next/link";
import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentAddIcon,
  LibraryBooks as LibraryBooksIcon,
  ListAlt as ListAltIcon,
  BarChart as BarChartIcon,
  FiberSmartRecord as FiberSmartRecordIcon,
  EmojiPeople as EmojiPeopleIcon,
  DateRange as DateRangeIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

// Define the width of the drawer
const drawerWidth = 240;

const dataRes = [
  {
    id: 0,
    label: "Dashboard",
    img: <DashboardIcon />,
    path: "/student",
  },
  {
    id: 1,
    label: "Uji Kemampuan",
    img: <AssignmentAddIcon />,
    component: <Contact />,
    path: "/student/contact",
  },
  {
    id: 2,
    label: "Modul",
    img: <LibraryBooksIcon />,
    component: <Contact />,
    path: "/student/modul",
  },
  {
    id: 3,
    label: "Try Out",
    img: <ListAltIcon />,
    component: <Contact />,
    path: "/Contact",
  },
  {
    id: 4,
    label: "Grafik",
    img: <BarChartIcon />,
    component: <Contact />,
    path: "/Contact",
  },
  {
    id: 5,
    label: "Record Zoom",
    img: <FiberSmartRecordIcon />,
    component: <Contact />,
    path: "/Contact",
  },
  {
    id: 6,
    label: "Profile Mentor",
    img: <EmojiPeopleIcon />,
    component: <Contact />,
    path: "/Contact",
  },
  {
    id: 7,
    label: "Jadwal",
    img: <DateRangeIcon />,
    component: <Contact />,
    path: "/Contact",
  },
  {
    id: 8,
    label: "Pengaturan",
    img: <SettingsIcon />,
    component: <Contact />,
    path: "/Contact",
  },
  {
    id: 9,
    label: "Logout",
    img: <LogoutIcon />,
    component: <Contact />,
    path: "/Contact",
  },
];

// Define the mixin for opened state
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// Define the mixin for closed state
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  marginTop: "40px",
});

// Create a styled component for the DrawerHeader
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// Define the AppBarProps interface
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// Create a styled AppBar component
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Create a styled Drawer component
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// Main component
const MiniDrawer = () => {
  const pathname = usePathname();

  // Retrieve the theme
  const theme = useTheme();

  // Next.js router hook
  const router = useRouter();

  // Local state for drawer open/close
  const [open, setOpen] = React.useState(() => {
    // Retrieve the state from localStorage, default to true if not present
    return localStorage.getItem("drawerOpen") === "false" ? false : true;
  });

  // Event handler for opening the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Event handler for closing the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Event handler for clicking on a tab
  const tabClickEvent = (url: any, index: number) => {
    router.push(url.path);
  };

  // Effect to persist the open state in localStorage
  React.useEffect(() => {
    localStorage.setItem("drawerOpen", open.toString());
  }, [open]);

  const checkUrl = () => {
    const arr = pathname.split("/");
    const firstTwoWords = "/" + arr.slice(1, 3).join("/");
    return firstTwoWords;
  };

  return (
    <Box>
      {/* CSS Reset */}
      <CssBaseline />

      {/* App Bar */}
      <AppBar position="fixed" open={open} style={{ background: "white" }}>
        <Toolbar className="rounded-sm shadow-md">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Link href={"/"} className="flex">
            <Image
              width={40}
              height={40}
              src="/logo-csw.png"
              className={`object-cover w-10 md:w-10`}
              alt="Logo CSW"
            />
            <p className="text-black font-semibold capitalize hidden md:block mt-2">
              Civil Servant Warrior
            </p>
          </Link>
        </Toolbar>

        <Breadcrumbs />
      </AppBar>

      {/* Drawer */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* List of items */}
        <List>
          <div className={`p-4 ${open ? "block" : "hidden"}`}>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/foto-profil.png"
                alt="Foto Profil"
                width={200}
                height={200}
                className="rounded-full mt-4 w-16 h-16 md:w-20 md:h-20"
              />
              <p className="capitalize text-center mt-2">
                Dashboard Anda, <br />
                <span className="font-semibold">Username</span>
              </p>
            </div>
          </div>
          {dataRes.map((text: any, index: number) => (
            <ListItem key={text.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                style={{
                  background:
                    text.path === checkUrl() ? "rgb(239 68 68 / 1)" : "white",
                }}
              >
                {/* "rgb(226 232 240 / 1)" */}
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  onClick={() => tabClickEvent(text, index)}
                >
                  {text.img}
                </ListItemIcon>
                <ListItemText
                  onClick={() => tabClickEvent(text, index)}
                  primary={text.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: "white" }}>
        <DrawerHeader />
        {/* Content for each route */}
        {/* Add your route components here */}
      </Box>
    </Box>
  );
};

// Export the component
export default MiniDrawer;
