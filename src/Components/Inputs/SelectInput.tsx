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
          inputRef.current.children[1].style.backgroundColor = "#068FDB";
          inputRef.current.children[1].style.borderColor = "#068FDB";
          inputRef.current.children[1].style.color = "#ffffff";
          break;
        case "İcradadır":
          inputRef.current.children[1].style.backgroundColor = "yellow";
          inputRef.current.children[1].style.borderColor = "yellow";
          inputRef.current.children[1].style.color = "#ffffff";
          break;
        case "Gecikir":
          inputRef.current.children[1].style.backgroundColor = "teal";
          inputRef.current.children[1].style.borderColor = "teal";
          inputRef.current.children[1].style.color = "#ffffff";
          break;
        case "Dayandırılıb":
          inputRef.current.children[1].style.backgroundColor = "red";
          inputRef.current.children[1].style.borderColor = "red";
          inputRef.current.children[1].style.color = "#ffffff";
          break;
        case "Bağlı":
          inputRef.current.children[1].style.backgroundColor = "#6FC03D";
          inputRef.current.children[1].style.borderColor = "#6FC03D";
          inputRef.current.children[1].style.color = "#ffffff";
          break;
        default: inputRef.current.children[1].style.backgroundColor = "white";
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