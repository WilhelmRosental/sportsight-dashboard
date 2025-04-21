import { Link } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Home: React.FC = () => {
  const [id, setId] = useState<number>(12);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.target.value));
  };

  return (
    <Box sx={{ marginLeft: "117px" }}>
      <Typography
        variant="h1"
        sx={{
          mt: 6,
          mb: 2.5,
          fontSize: 50,
          fontWeight: 400,
          color: "#d32f2f",
          textAlign: "center",
        }}
      >
        SportSee Project
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body1">
          API Base URL: {import.meta.env.VITE_API_BASE_URL}
        </Typography>
        <label htmlFor="idprofil">
          Enter the id of the profile you want to see:{" "}
        </label>
        <TextField
          type="number"
          name="idprofil"
          placeholder="12"
          onChange={handleChange}
          value={id}
          inputProps={{ min: 0 }}
          sx={{
            maxWidth: 300,
            width: "100%",
            background: "grey",
            borderRadius: 1,
            "& input": {
              color: "white",
              padding: "10px",
            },
          }}
          variant="outlined"
        />
        <Button
          component={Link}
          to={`/profil/${id}`}
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
        >
          Go to profile of: {id}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
