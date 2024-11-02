import React, { Component } from "react";
import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";

class TaskManagerContainer extends Component {
    state = {
        tasks: [
            { id: 1, text: "Learn React", done: false },
            { id: 2, text: "Build a Task Manager", done: false },
            { id: 3, text: "Deploy to Production", done: true },
        ],
    }
  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center mb-4">Task Manager</h1>
        <TaskInput/>
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default TaskManagerContainer;
