'use client'
import React, { cloneElement, useEffect, useState } from "react";
import classes from "./styles/Navbar.module.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
    useScrollTrigger,
    Container,
    Stack,
    Tabs,
    Tab,
    useTheme,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer,
    SwipeableDrawer,
    Box,
    Avatar,
} from "@mui/material";
import styled from "@emotion/styled";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CallIcon from "@mui/icons-material/Call";
import { deepOrange, red } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import { usePathname } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const StyledDiv = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 45,
        width: "100%",
        backgroundColor: deepOrange["A400"],
        borderRadius: "50%",
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        "&.Mui-selected": {
            color: "red",
        },
    })
);

const Navbar = () => {
    const [currentTab, setCurrentTab] = useState("home");
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const tabChange = (event, currentTab) => {
        setCurrentTab(currentTab);
    };
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/" && currentTab !== "home") {
            setCurrentTab("home");
        } else if (
            pathname === "/create" &&
            currentTab !== "create"
        ) {
            setCurrentTab("create");
        } else if (
            pathname === "/sign-in" &&
            currentTab !== "sign-in"
        ) {
            setCurrentTab("sign-in");
        } else if (
            pathname === "/sign-up" &&
            currentTab !== "sign-up"
        ) {
            setCurrentTab("sign-up");
        }
        console.log("Pathname: " + pathname)
    }, [currentTab, pathname]);

    const drawerContent = (
        <Box
            role="presentation"
            onClick={() => setIsOpenDrawer(false)}
            onKeyDown={() => setIsOpenDrawer(false)}
            sx={{ width: 250 }}
        >
            <List className={classes.list}>
                <ListItem disablePadding component={Link} href={"/"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} href={"/create"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} href={"/sign-in"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign In" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} href={"/sign-up"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Up" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <ElevationScroll>
                <AppBar className={classes.appbar} position="fixed">
                    <Container maxWidth="xl">
                        <Toolbar className={classes.toolbar}>
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                sx={{ color: "black" }}
                                alignItems={"center"}
                            >
                                <Avatar
                                    variant="rounded"
                                    src={""}
                                    alt="Visharati Dange"

                                    sx={{
                                        mr: { xs: 0.5, md: 1 },
                                        width: { xs: 40, md: 56 },
                                        height: { xs: 40, md: 56 },
                                    }}
                                >V</Avatar>
                            </Stack>
                            <StyledTabs
                                value={currentTab}
                                onChange={tabChange}
                                sx={{
                                    height: "72px",
                                    display: { xs: "none", md: "block" },
                                }}
                            >
                                <StyledTab
                                    label="Home"
                                    icon={<HomeIcon />}
                                    iconPosition="start"
                                    value={"home"}
                                    component={Link}
                                    href="/"
                                />
                                <StyledTab
                                    label="Create"
                                    icon={<AddIcon />}
                                    iconPosition="start"
                                    value={"create"}
                                    component={Link}
                                    href="/create"
                                />
                                <StyledTab
                                    label="Sign In"
                                    icon={<LoginIcon />}
                                    iconPosition="start"
                                    value={"sign-in"}
                                    component={Link}
                                    href="/sign-in"
                                />
                                <StyledTab
                                    label="Sign Up"
                                    icon={<PersonAddIcon />}
                                    iconPosition="start"
                                    value={"sign-up"}
                                    component={Link}
                                    href="/sign-up"
                                />
                            </StyledTabs>
                            <Stack direction={"row"} spacing={1}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<LogoutIcon fontSize="small" />}
                                    size={"small"}
                                >
                                    Logout
                                </Button>
                                <IconButton
                                    onClick={() => {
                                        setIsOpenDrawer((prev) => !prev);
                                    }}
                                    sx={{ ml: "10px", display: { xs: "block", md: "none" } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Stack>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <StyledDiv />
            <SwipeableDrawer
                anchor={"right"}
                open={isOpenDrawer}
                onClose={() => setIsOpenDrawer(false)}
                onOpen={() => setIsOpenDrawer(true)}
            >
                {drawerContent}
            </SwipeableDrawer>
        </>
    );
};

export default Navbar;