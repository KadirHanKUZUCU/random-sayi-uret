import React, { useState } from "react";

// mui component
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

// Statelerr

const App = () => {
  const [minDeger, setMinDeger] = useState(0);
  const [maxDeger, setMaxDeger] = useState(10);
  const [randomSayi, setRandomSayi] = useState(7);

  const randomSayiVer = () => {
    setRandomSayi(
      Math.floor(Math.random() * (maxDeger - minDeger + 1) + minDeger)
    );
  };

  return (
    <div className="mainContainer">
      <h1>Rastgele Sayı Üretme</h1>
      <div className="sonucContainer">
        <p>
          Sayı <span>{randomSayi}</span>
        </p>
      </div>
      <div className="sayiContainer">
        <TextField
          color="success"
          id="minSayi"
          label="Min"
          variant="filled"
          type="number"
          value={minDeger}
          onChange={(e) => setMinDeger(+e.target.value)}
        />
        <TextField
          error
          id="maxSayi"
          label="Max"
          variant="filled"
          type="number"
          value={maxDeger}
          onChange={(e) => setMaxDeger(+e.target.value)}
        />
        <br></br>
        <Button
          id="btnUret"
          variant="contained"
          color="success"
          onClick={randomSayiVer}
          endIcon={<SendIcon />}
        >
          Sayi Üret
        </Button>
      </div>
    </div>
  );
};

export default App;
