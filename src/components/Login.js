// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addLogin } from "../service/api";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = {
    username: "",
    password: "",
  };
  addLogin(user);
  // setUsername("");
  // setEmail("");
  // setPassword("");
  // setConfirmPassword("");

  // const navigate = useNavigate();
  return (
    <Card
      color="transparent"
      shadow={false}
      style={{ justifyContent: "center" }}
      // onClick={(e) => navigate("/login")}
    >
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter name and password
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          {/* <Input size="lg" label="Email" /> */}
          <Input type="password" size="lg" label="Password" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <Link
                className="font-medium transition-colors hover:text-blue-500"
                to="/"
              >
                &nbsp;Terms and Conditions
              </Link>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Login
        </Button>
      </form>
    </Card>
  );
};
export default Login;
