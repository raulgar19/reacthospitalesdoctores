import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class Doctores extends Component {
  url = Global.apiDoctores;

  state = {
    doctores: [],
  };

  loadDoctores = () => {
    var request = "api/Doctores/DoctoresHospital/" + this.props.idhospital;

    axios.get(this.url + request).then((response) => {
      this.setState({
        doctores: response.data,
      });
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
