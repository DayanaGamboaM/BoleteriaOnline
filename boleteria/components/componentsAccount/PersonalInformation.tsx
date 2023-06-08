import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "react-bootstrap";

const PersonalInformation = () => {
  const [hover, setHover] = useState(false);

  const buttonStyles = {
    width: "40px",
    height: "40px",
    color: "black",
    backgroundColor: "#D9D9D9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    border: "none",
    borderRadius: "50%",
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "-60px",
    marginRight: "25px",
    textDecoration: "none",
    ...(hover && {
      backgroundColor: "#C9C9C9",
    }),
  };

  return (
    <div className="container">
      <div style={{marginTop: "-50px"}}>
        <div
          className="card-information bg-white mb-5"
          style={{
            position:"relative",
            width: "1400px",
            maxWidth: "100%",
            bottom:"-30px"
          }}
        >
          <div className="row p-4">
            <div
              className="p-4"
              style={{ position: "relative", margin: "auto"}}
            >
              <h4
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Tus Datos Personales
              </h4>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 d-flex">
                  <div
                    className="p-3 mt-3 rounded-2"
                    style={{
                      width: "400px",
                      maxWidth: "100%",
                      backgroundColor: "#D9D9D9",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      margin: "auto",
                    }}
                  >
                    <h5 style={{ fontWeight: "bold", color: "Black" }}>
                      Nombre
                    </h5>
                    <h4 style={{ fontWeight: "bold", color: "Black" }}>
                      Persona123
                    </h4>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-end">
                  <div
                    className="p-3 mt-3 rounded-2"
                    style={{
                      width: "400px",
                      maxWidth: "100%",
                      backgroundColor: "#D9D9D9",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      margin: "auto",
                    }}
                  >
                    <h5 style={{ fontWeight: "bold", color: "Black" }}>
                      Apellido
                    </h5>
                    <h4 style={{ fontWeight: "bold", color: "Black" }}>
                      Apellido123
                    </h4>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex">
                  <div
                    className="p-3 mt-3 rounded-2"
                    style={{
                      width: "400px",
                      maxWidth: "100%",
                      backgroundColor: "#D9D9D9",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      margin: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h5 style={{ fontWeight: "bold", color: "Black" }}>
                        Sexo
                      </h5>
                      <h4 style={{ fontWeight: "bold", color: "Black" }}>
                        F/M
                      </h4>
                    </div>
                    <div
                      id="vertical-line-gender"
                      style={{
                        width: "3px",
                        height: "70px",
                        background: "rgb(7, 0, 0)",
                        marginLeft: "60px",
                      }}
                    ></div>
                    <Button
                      id="button-gender"
                      style={buttonStyles}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      X
                    </Button>
                  </div>
                </div>

                <div className="col-12 col-md-6 d-flex justify-content-end align-items-end">
                  <div
                    className="p-3 mt-3 rounded-2"
                    style={{
                      width: "400px",
                      maxWidth: "100%",
                      height: "100px",
                      maxHeight: "100%",
                      backgroundColor: "#D9D9D9",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      margin: "auto",
                    }}
                  >
                    <h5 style={{ fontWeight: "bold", color: "Black" }}>
                      Nacimiento
                    </h5>
                    <div style={{ position: "relative", bottom: "5px" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
