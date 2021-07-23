import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

let handleSubmit = (event) => {
  event.preventDefault();
  fetch("http://localhost:5000/user/login", {
    method: "POST",

    body: JSON.stringify({ username: userName, passwordHash: password }),
    headers: new Headers({
      Content: "application/json",
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      props.updateToken(json.sessionToken);
    });
};

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};
export default Login;
