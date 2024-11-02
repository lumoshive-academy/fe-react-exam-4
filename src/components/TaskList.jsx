import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const TaskList = ({ tasks }) => (
  <ListGroup>
    {tasks.map((task) => (
      <ListGroupItem
        key={task.id}
        className="d-flex justify-content-between align-items-center"
      >
        <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
          {task.text}
        </span>
        <div className="d-flex">
          <Button variant={task.done ? "secondary" : "success"}>
            {task.done ? "Undo" : "Done"}
          </Button>
          <Button variant="outline-danger ms-2">Delete</Button>
        </div>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default TaskList;
