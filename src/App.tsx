import "./App.css";
import TicketBook from "./components/TicketBook";
import { Box, Paper, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Box
        component={Paper}
        elevation={2}
        sx={{
          padding: 5,
          borderRadius: 5,
          
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: 4,
            fontFamily: "monospace",
          }}
        >
          Welcome to the indigo flights
        </Typography>
        <TicketBook />
      </Box>
    </>
  );
}

export default App;
