import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const TaskInput = () => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Add a new task"
      />
      <Button variant="primary">
        Add Task
      </Button>
    </InputGroup>
  );
};

export default TaskInput;
