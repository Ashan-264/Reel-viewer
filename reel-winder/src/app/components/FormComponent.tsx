"use client";
import React, { useState } from "react";
import { createUser } from "@/services/userService";

const FormComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await createUser(username, email, name, interests);
      if (newUser) {
        alert("User created successfully!");
        // Optionally reset the form
        setUsername("");
        setEmail("");
        setName("");
        setInterests("");
      } else {
        alert("Failed to create user.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("An error occurred while creating the user.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Interests:</label>
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default FormComponent;
