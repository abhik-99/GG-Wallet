import Box from "@mui/material/Box";

export const ErrorPage = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src="./404.gif" alt="rethink maybe, senpai?" />
    </Box>
  );
};
