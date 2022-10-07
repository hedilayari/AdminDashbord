import { Grid, Paper } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import axios from "axios";
const paperStyle = {
  margin: "30px auto auto ",
  padding: "60px",
  height: "70vh",
  width: "300px",
};

const avatar = {
  backgroundColor: "#32dba0",
};

const Registre = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    gender: "",
    password: "",
    email: "",
  });
  const handleonsubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/register", {
        name: values.name,
        lastname: values.lastname,
        gender: values.gender,
        password: values.password,
        email: values.email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatar}>
            {" "}
            <AddCircleOutlineIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleonsubmit}>
          <TextField
            id="standard-basic"
            label="Name"
            required
            fullWidth
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <TextField
            id="standard-basic"
            label="Last name"
            required
            fullWidth
            onChange={(e) => setValues({ ...values, lastname: e.target.value })}
          />
          <TextField
            id="standard-basic"
            label="Email"
            required
            fullWidth
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <FormControl component="fieldset" style={{ marginTop: "10px" }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              row
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            id="standard-basic"
            label="Password"
            required
            fullWidth
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <TextField
            id="standard-basic"
            label="Password confirm"
            required
            fullWidth
          />
          
          <Button variant="contained"  fullWidth  type="submit" style={{ marginTop: "20px", backgroundColor: "#32dba0" }}>
  Sign Up
</Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default Registre;
