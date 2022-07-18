import { TextField, Autocomplete } from "@mui/material";
import { useRef, useState } from "react";

// Style
import './style.scss';

// Import Icon
import ChevronDownIcon from './ChevronDownIcon';

export default function SelectInput() {

  const inputRef: any = useRef();

  const [labels, setLabels] = useState([
    { label: "Açıq" },
    { label: "İcradadır" },
    { label: "Gecikir" },
    { label: "Dayandırılıb" },
    { label: "Bağlı" },
  ]);

  const changeColor = (event: any, value: any) => {
    if (value !== null) {
      switch (value.label) {
        case "Açıq":
          inputRef.current.style.backgroundColor = "#068FDB";
          break;
        case "İcradadır":
          inputRef.current.style.backgroundColor = "yellow";
          break;
        case "Gecikir":
          inputRef.current.style.backgroundColor = "teal";
          break;
        case "Dayandırılıb":
          inputRef.current.style.backgroundColor = "red";
          break;
        case "Bağlı":
          inputRef.current.style.backgroundColor = "#6FC03D";
          break;
        default: inputRef.current.style.backgroundColor = "white";
      }
    }
    else {
      inputRef.current.style.backgroundColor = "white";
    }
  };

  return (
    <Autocomplete
      popupIcon={<ChevronDownIcon />}
      disableClearable
      disablePortal
      fullWidth
      id="combo-box-demo"
      options={labels}
      onChange={(event, value: any) => changeColor(event, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Status"
          placeholder="Status"
          ref={inputRef}
          className="SelectInput"
        />
      )}
    />
  );
}