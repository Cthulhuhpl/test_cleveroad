import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import "./style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../index";

   
export default function BasicCard({ history }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { auth } = useContext(Context);
  const authUser = () =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        localStorage.setItem("token", user.accessToken);
        setErrorMsg(null);
        history.push("/catalog");
      })
      .catch((error) => {
        debugger;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
 
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="root">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            authUser();
          }}
        >
          <Typography className="error">{errorMsg || ""}</Typography>
          <TextField margin='normal'
            required
            fullWidth
            id="outlined-password-input"
            label="Email"
            type="text"
            autoComplete="current-password"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField margin='normal'
            required
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" size="small" fullWidth>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
