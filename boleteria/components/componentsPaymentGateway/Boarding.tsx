import React from "react";
const Boarding = () => {

    return (
        <div className="container mt-5">
            <div className="card text-black " style={{ backgroundColor: '#D9D9D9', maxWidth: '35rem'}} >
                <div className="card-header">
                    <div className="d-flex align-items-center mr-3">
                        <span className="cuadro-azul mr-5">1</span>
                        <span >Abordaje</span>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">¿Dónde abordarás?</h5>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="radio" name="opcion" id="terminal" />
                            <label className="form-check-label" htmlFor="terminal">
                                Terminal
                            </label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="radio" name="opcion" id="carretera" />
                            <label className="form-check-label" htmlFor="carretera">
                                Carretera
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Boarding;