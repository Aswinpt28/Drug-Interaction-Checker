import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../components/sidebar";

const MedicineTableRow = ({ medicine }) => (
  <tr key={medicine.id}>
    <td>{medicine.id}</td>
    <td>{medicine.name}</td>
    <td>{medicine.dosage}</td>
    <td>{medicine.manufacturer}</td>
  </tr>
);

const App = () => {
  const medicines = [
    {
      id: 1,
      name: "Medicine 1",
      dosage: "10mg",
      manufacturer: "Manufacturer A",
    },
    {
      id: 2,
      name: "Medicine 2",
      dosage: "20mg",
      manufacturer: "Manufacturer B",
    },
    {
      id: 3,
      name: "Medicine 3",
      dosage: "30mg",
      manufacturer: "Manufacturer C",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h2 className="mb-4">Medicine List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Dosage</th>
                <th>Manufacturer</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <MedicineTableRow key={medicine.id} medicine={medicine} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default App;
