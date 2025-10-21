import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import DetallesDoctor from "./DetallesDoctor";

export default class Doctores extends Component {
  url = Global.apiDoctores;

  state = {
    doctores: [],
    doctor: null,
  };

  loadDoctores = () => {
    var request = "api/Doctores/DoctoresHospital/" + this.props.idhospital;

    axios.get(this.url + request).then((response) => {
      this.setState({
        doctores: response.data,
      });
    });
  };

  loadDetallesDoctor = (doctor) => {
    this.setState({
      doctor: doctor,
    });
  };

  componentDidMount = () => {
    this.loadDoctores();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.idhospital !== this.props.idhospital) {
      this.loadDoctores();
    }
  };

  render() {
    return (
      <div className="m-4">
        <h2 style={{ color: "red" }}>
          Doctores del hospital: {this.props.idhospital}
        </h2>
        <table className="table table-striped p-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doctor, index) => {
              return (
                <tr key={index}>
                  <td>{doctor.idDoctor}</td>
                  <td>{doctor.apellido}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.salario}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        this.loadDetallesDoctor(doctor);
                      }}
                    >
                      Detalles
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.doctor && <DetallesDoctor doctor={this.state.doctor} />}
      </div>
    );
  }
}
