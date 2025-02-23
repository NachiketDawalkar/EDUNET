/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      setMembers([...members, newMember]);
      setNewMember("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teamName) {
      alert("Please enter a team name.");
      return;
    }
    if (members.length === 0) {
      alert("Please add at least one team member.");
      return;
    }

    alert(`🎉 Team "${teamName}" created successfully with members: ${members.join(", ")}`);
    
    // Reset form after submission
    setTeamName("");
    setMembers([]);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create a New Team</h2>
      <form onSubmit={handleSubmit}>
        {/* Team Name Input */}
        <div className="mb-3">
          <label className="form-label">Team Name</label>
          <input
            type="text"
            className="form-control"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter team name"
          />
        </div>

        {/* Add Team Members */}
        <div className="mb-3">
          <label className="form-label">Add Team Members</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              placeholder="Enter member name"
            />
            <button type="button" className="btn btn-primary" onClick={handleAddMember}>
              Add
            </button>
          </div>
        </div>

        {/* Display Members */}
        {members.length > 0 && (
          <div className="mb-3">
            <h5>Team Members:</h5>
            <ul className="list-group">
              {members.map((member, index) => (
                <li key={index} className="list-group-item">{member}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn-success">Create Team</button>
      </form>
    </div>
  );
};

export default CreateTeam;
