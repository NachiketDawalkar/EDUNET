/* eslint-disable no-unused-vars */
import React, { useState } from "react";



const Home = () => {
  // Sample data for projects
  const projects = [
    { id: 1, name: "Website Redesign", status: "In Progress" },
    { id: 2, name: "Mobile App Development", status: "Completed" },
    { id: 3, name: "Marketing Strategy", status: "Pending" },
  ];

  // Sample data for deadlines
  const deadlines = [
    { task: "Complete UI Design", dueDate: "Feb 28, 2025" },
    { task: "API Integration", dueDate: "Mar 5, 2025" },
    { task: "Testing & Debugging", dueDate: "Mar 10, 2025" },
  ];

  // Sample team members
  const teamMembers = ["Alice Johnson", "Bob Smith", "Charlie Davis"];

  // Task Management State
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Function to mark task as complete
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>

      {/* Overview Section */}
      <div className="row">
        {/* Project Overview */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>Project Overview</h4>
            <ul className="list-group">
              {projects.map((project) => (
                <li key={project.id} className="list-group-item">
                  {project.name} - <span className="text-primary">{project.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Task Deadlines */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>Upcoming Deadlines</h4>
            <ul className="list-group">
              {deadlines.map((deadline, index) => (
                <li key={index} className="list-group-item">
                  {deadline.task} - <span className="text-danger">{deadline.dueDate}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Members */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>Team Members</h4>
            <ul className="list-group">
              {teamMembers.map((member, index) => (
                <li key={index} className="list-group-item">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Task Management Section */}
      <div className="mt-4 card p-3 shadow-sm">
        <h4>Task Management</h4>
        <div className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button className="btn btn-primary" onClick={addTask}>Add Task</button>
        </div>
        
        {/* Task List */}
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
              </span>
              <div>
                <button className="btn btn-success btn-sm me-2" onClick={() => toggleTask(index)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
