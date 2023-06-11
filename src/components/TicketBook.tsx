import { Box, Button, Stack, TextField } from "@mui/material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import AirPlaneList from "./AirPlaneList";
import { useState } from "react";
import axios from "axios";

function TicketBook() {
  const [apiCall, setApiCall] = useState(true);
  const [searchData, setSearchData] = useState({
    startPoint: "",
    endPoint: "",
    date: "",
  });

  const handleSubmit = async () => {
    try {
      const someData = await axios.get(
        "http://localhost:9000/api/v1/getflights"
      );
      console.log(someData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Stack spacing={5} direction={"row"}>
        <TextField
          label="start point"
          fullWidth
          value={searchData.startPoint}
          onChange={(e) => {
            setSearchData({
              ...searchData,
              startPoint: e.target.value,
            });
          }}
        />
        <ConnectingAirportsIcon fontSize="large" />{" "}
        <TextField
          label="end point"
          fullWidth
          value={searchData.endPoint}
          onChange={(e) => {
            setSearchData({
              ...searchData,
              endPoint: e.target.value,
            });
          }}
        />
        <TextField
          label="Date"
          fullWidth
          value={searchData.date}
          onChange={(e) => {
            setSearchData({
              ...searchData,
              date: e.target.value,
            });
          }}
        />
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Search
        </Button>
      </Stack>

      {apiCall && <AirPlaneList />}
    </Box>
  );
}

export default TicketBook;
