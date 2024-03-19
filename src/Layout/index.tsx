import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar/index";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10141f",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        padding: 2,
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: "100%",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
