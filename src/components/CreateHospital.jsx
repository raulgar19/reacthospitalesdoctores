import axios from "axios";
import React, { Component } from "react";
import Global from "../Global";

export default class CreateHospital extends Component {
  url = Global.apiHospitales;
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaDireccion = React.createRef();
  cajaTelefono = React.createRef();
  cajaCamas = React.createRef();

  state = {
    mensaje: "",
  };

  insertHospital = (event) => {
    event.preventDefault();
    var request = "webresources/hospitales/post";

    var hospital = {
      idhospital: parseInt(this.cajaId.current.value),
      nombre: this.cajaNombre.current.value,
      direccion: this.cajaDireccion.current.value,
      telefono: this.cajaTelefono.current.value,
      camas: parseInt(this.cajaCamas.current.value),
    };

    axios.post(this.url + request, hospital).then((response) => {
      this.setState({
        mensaje: "Hospital añadido correctamente",
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Create Hospital</h1>
        {this.state.mensaje && (
          <h3 style={{ color: "fuchsia" }}>{this.state.mensaje}</h3>
        )}
        <form className="m-4">
          <label className="form-label">Id</label>
          <input className="form-control" type="text" ref={this.cajaId} />
          <label className="form-label">Nombre</label>
          <input className="form-control" type="text" ref={this.cajaNombre} />
          <label className="form-label">Dirección</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajaDireccion}
          />
          <label className="form-label">Teléfono</label>
          <input className="form-control" type="text" ref={this.cajaTelefono} />
          <label className="form-label">Camas</label>
          <input className="form-control" type="text" ref={this.cajaCamas} />
          <button
            className="btn btn-warning mt-4"
            onClick={this.insertHospital}
          >
            Nuevo hospital
          </button>
        </form>
      </div>
    );
  }
}
