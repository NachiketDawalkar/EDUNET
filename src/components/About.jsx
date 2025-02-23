// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Our Project Management Tool</h1>
      
      <p className="lead text-center">
        Welcome to <strong>Project Management Tool</strong>, the ultimate solution for managing projects, tracking tasks, and improving team productivity!
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>🚀 Why Choose Our Tool?</h3>
          <ul>
            <li><strong>Intuitive Dashboard</strong> – Get a clear overview of ongoing projects, task deadlines, and team activities.</li>
            <li><strong>Task & Project Management</strong> – Create, edit, and delete projects effortlessly. Assign team members to tasks and monitor progress.</li>
            <li><strong>Real-Time Collaboration</strong> – Work together efficiently with built-in team assignment and communication features.</li>
            <li><strong>Analytics & Productivity Tracking</strong> – Visualize productivity trends, task completion rates, and project performance with interactive charts.</li>
            <li><strong>Customizable Theme</strong> – Switch between dark and light modes for a comfortable experience.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h3>👥 Who Can Use This?</h3>
          <ul>
            <li>🔹 <strong>Project Managers</strong> – Organize projects and assign tasks efficiently.</li>
            <li>🔹 <strong>Teams & Startups</strong> – Collaborate and track progress effortlessly.</li>
            <li>🔹 <strong>Freelancers</strong> – Keep track of deadlines and manage multiple projects.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3>📩 Get in Touch</h3>
        <p>Have any questions or suggestions? Contact us at <strong>support@abc.com</strong></p>
      </div>
    </div>
  );
};

export default About;
