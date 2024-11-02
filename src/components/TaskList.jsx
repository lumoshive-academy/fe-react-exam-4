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
        <Button
          variant={task.done ? "secondary" : "success"}
        >
          {task.done ? "Undo" : "Done"}
        </Button>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default TaskList;
