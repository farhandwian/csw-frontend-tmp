"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Contact from "../../student/contact/page";
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
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

// Define the width of the drawer
const drawerWidth = 200;

const dataRes = [
  {
    id: 0,
    label: "Dashboard",
    img: <DashboardIcon />,
    path: "/student/dashboard",
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

const settings = [
  {
    id: 1,
    image: "/foto-profil.png",
    text: "Farhan Dwian",
  },
  {
    id: 2,
    image: "/logo-csw.png",
    text: "Civil Servant Warrior",
  },
  {
    id: 3,
    image: "/icon/ic-logout.svg",
    text: "Logout",
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
  marginTop: "",
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
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [auth, setAuth] = React.useState(true);

  const [status, setStatus] = React.useState("newbie"); //temporary

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

      {/* App Bar atau Nav barnya */}
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
            <MenuIcon sx={{ color: "black" }} />
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
          {/* supaya si profilenya bisa kesamping */}
          <div className="grow"></div>

          {/* profile di samping kanan navbar */}
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {auth ? (
                <Avatar alt="Remy Sharp" src="/foto-profil.png" />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, index) => (
              <MenuItem
                key={setting.id}
                onClick={handleCloseUserMenu}
                sx={{ fontFamily: "Poppins", fontSize: "12px" }}
              >
                {index === 0 && auth && status === "newbie" ? (
                  <>
                    <Image
                      src={setting.image}
                      alt={"profile-image"}
                      width={25}
                      height={25}
                      className={`${
                        index !== settings.length - 1 && "rounded-full"
                      } mr-2`}
                    />
                    <div>
                      <h3>Login as {setting.text}</h3>
                      <h3>Newbie User</h3>
                    </div>
                  </>
                ) : index === 0 && auth && status === "premium" ? (
                  <>
                    <AccountCircle />
                    <div>
                      <h3>Login as {setting.text}</h3>
                      <h3>Premium User</h3>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={setting.image}
                      alt={"profile-image"}
                      width={25}
                      height={25}
                      className={`${
                        index !== settings.length - 1 && "rounded-full"
                      } mr-2`}
                    />
                    <h3>{setting.text}</h3>
                  </>
                )}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
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
          {/* profile jika sidebar terbuka */}
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

          {/* profile jika sidebar tertutup */}
          <div className={`p-1 ${open ? "hidden" : "block"}`}>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/foto-profil.png"
                alt="Foto Profil"
                width={35}
                height={35}
                className="rounded-full overflow-hidden mb-2 mt-2"
              />
            </div>
          </div>

          {/* data pada sidebar */}

          {dataRes.map((data: any, index: number) => (
            <ListItem key={data.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                style={{
                  background:
                    data.path === checkUrl() ? "rgb(239 68 68 / 1)" : "white",
                }}
              >
                {/* "rgb(226 232 240 / 1)" */}
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1 : "auto",
                    justifyContent: "center",
                  }}
                  onClick={() => tabClickEvent(data, index)}
                >
                  {data.img}
                </ListItemIcon>
                <ListItemText
                  onClick={() => tabClickEvent(data, index)}
                  primary={
                    <Typography fontFamily="Poppins" fontSize={12}>
                      {data.label}
                    </Typography>
                  }
                  sx={{
                    opacity: open ? 1 : 0,
                    fontFamily: "Times New Roman !important",
                  }}
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
