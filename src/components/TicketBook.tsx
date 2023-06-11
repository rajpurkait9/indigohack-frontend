import { Box, Stack, TextField } from "@mui/material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

function TicketBook() {
  return (
    <Box>
      <Stack spacing={5} direction={"row"}>
        <TextField label="start point" fullWidth />
        <ConnectingAirportsIcon fontSize="large" />{" "}
        <TextField label="end point" fullWidth />
      </Stack>
    </Box>
  );
}

export default TicketBook;
