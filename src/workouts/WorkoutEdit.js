import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const WorkoutEdit = (props) => {
  const [editDesc, setEditDesc] = useState(props.workoutToUpdate);
  const [editDef, setEditDef] = useState(props.workoutToUpdate);
  const [editRes, setEditRes] = useState(props.workoutToUpdate);


  const workoutUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/log/${event.id}`, {
      method: "PUT",
      body: JSON.stringify({
        description: editDesc,
        definition: editDef,
        result: editRes,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => {
      props.fetchWorkouts();
      props.updateOff();
    });
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader>Log a Workout</ModalHeader>
      <ModalBody>
        <Form onSubmit={workoutUpdate}>
          <FormGroup>
            <Label htmlFor="description">Edit Description:</Label>
            <Input
              type="text"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="definition">Edit Definition:</Label>
            <Input
              type="select"
              value={editDef}
              onChange={(e) => setEditDef(e.target.value)}
            >
              <option></option>
              <option value="Time">Time</option>
              <option value="Weight">Weight</option>
              <option value="Distance">Distance</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="result">Edit Result:</Label>
            <Input
              type="text"
              value={editRes}
              onChange={(e) => setEditRes(e.target.value)}
            ></Input>
          </FormGroup>
          <Button type="submit">Submit Update</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default WorkoutEdit;
