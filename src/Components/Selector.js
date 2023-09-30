import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selector(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: "16rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> {props.title} </InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={props.title}
          onChange={handleChange}
        >
          {props.options.map((d) => (
            <MenuItem value={d}> {d} </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
