import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const WorkoutCreate = (props) => {
  const [description, setDescription] = useState("");
  const [definition, setDefinition] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/log/create", {
      method: "POST",
      body: JSON.stringify({
        description: description,
        definition: definition,
        result: result,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDescription("");
        setDefinition("");
        setResult("");
        props.fetchWorkouts();
      });
  };

  return (
    <>
      <h3>Log a Workout</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="description"></Label>
          <Input
            type="text"
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="definition"></Label>
          <Input
            type="select"
            name="definition"
            placeholder="empty"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          >
            <option value=""></option>
            <option value="Time">Time</option>
            <option value="Weight">Weight</option>
            <option value="Distance">Distance</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="result"></Label>
          <Input
            type="text"
            name="result"
            placeholder="result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
        </FormGroup>
        <Button type="Submit">Submit</Button>
      </Form>
    </>
  );
};

export default WorkoutCreate;
