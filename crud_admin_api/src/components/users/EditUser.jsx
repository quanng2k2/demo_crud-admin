import React, { useEffect, useState } from "react";
import "./AddUser.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const { name, username, email } = user;

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    let result = await axios.get(`http://localhost:8000/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2>Edit User Form</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onInput={(e) => handleInputChange(e)}
          />
          <br />
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onInput={(e) => handleInputChange(e)}
          />
          <br />

          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={email}
            onInput={(e) => handleInputChange(e)}
          />
          <br />
          <br />

          <Button variant="outline-success" type="submit">
            Save User
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
