import React, { Component } from "react";

export default class DetallesDoctor extends Component {
  render() {
    const { doctor } = this.props;

    return (
      <div className="card mt-4 p-3">
        <h2 className="card-title">Detalles Doctor</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>ID:</strong> {doctor.idDoctor}
          </li>
          <li className="list-group-item">
            <strong>Apellido:</strong> {doctor.apellido}
          </li>
          <li className="list-group-item">
            <strong>Especialidad:</strong> {doctor.especialidad}
          </li>
          <li className="list-group-item">
            <strong>Salario:</strong> {doctor.salario}
          </li>
        </ul>
      </div>
    );
  }
}
