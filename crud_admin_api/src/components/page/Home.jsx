import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [dataView, setDataView] = useState({});
  // Khi click vào icon mắt thì sẽ gọi đến hàm handleShow kèm dữ liệu là một đối tượng click vào
  const handleShow = (data) => {
    setShow(true);
    // set lại data thì lúc này data chính là đối tượng user
    setDataView(data);
  };

  const [data, setData] = useState([]);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8000/users");
    setData(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  };

  return (
    <div>
      <h2> HomePage</h2>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr className="bg-dark text-white">
              <th>STT</th>
              <th> Name</th>
              <th> userName</th>
              <th>Email</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr>
                  <th scope="row"> {index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link>
                      <Button
                        variant="primary"
                        onClick={() => handleShow(user)}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>View customer information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <ul>
                            <li>Name : {dataView.name}</li>
                            <li>User Name : {dataView.username}</li>
                            <li>Email : {dataView.email}</li>
                          </ul>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/user/edit/${user.id}`}>
                      <Button variant="outline-warning">Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
