import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SignUp = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/user/register", {
      method: "POST",

      body: JSON.stringify({ username: userName, passwordHash: password }),
      headers: new Headers({
        'Content-Type': "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div>
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            onChange={(e) => setUserName(e.target.value)}required
            value={userName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <Button type="submit">SignUp</Button>
      </Form>
    </div>
  );
};
export default SignUp;
