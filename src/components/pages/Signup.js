import React from "react";
import { Button,TextField } from "@material-ui/core";

const Signup = () => {
  return (
    <div>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
      <Button variant="contained" color="primary">
        SignUp with Google
      </Button>
    </div>
  );
};

export default Signup;
