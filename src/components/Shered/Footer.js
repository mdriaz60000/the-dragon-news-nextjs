import { Box, Button, IconButton, Typography } from "@mui/material";
import { FaWhatsappSquare,FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import {  Stack } from "@mui/material";
import Link from "next/link";

const Footer = () => {

    const navItems = [
        {
          route: "Home",
          pathname: "/",
        },
        {
          route: "Pages",
          pathname: "/pages",
        },
        {
          route: "Category",
          pathname: "/categories/news?category=all-news",
        },
        {
          route: "News",
          pathname: "/news",
        },
        {
          route: "About",
          pathname: "/about",
        },
        {
          route: "Contact",
          pathname: "/contact",
        },
      ];
    return (
        <Box className='bg-black px -2 py-10 text-center items-center'>
               <Stack
               className=" justify-center items-center"
                direction="row"
                sx={{
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                <IconButton>
                <FaFacebookSquare />
                </IconButton>
                <IconButton>
                <FaTwitter />
                </IconButton>
                <IconButton>
                <FaWhatsappSquare />
                </IconButton>
                <IconButton>
                <FaLinkedin />
                </IconButton>
              </Stack>
              <Box className="w-full text-center">
              {navItems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Typography className=" text-red-400">
                2023 the dragoan news.design by MOHAMMAD RIAZ
            </Typography>
        </Box>
    );
};

export default Footer;