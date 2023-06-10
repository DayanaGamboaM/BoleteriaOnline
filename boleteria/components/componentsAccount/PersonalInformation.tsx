import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { Button } from "react-bootstrap";

const PersonalInformation = () => {
  const [hover, setHover] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const currentDate = dayjs(new Date());

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  dayjs.locale("es");

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
      <div style={{ marginTop: "-50px" }}>
        <div
          className="card-information bg-white mb-5"
          style={{
            position: "relative",
            width: "1400px",
            maxWidth: "100%",
            bottom: "-30px",
          }}
        ></div>
        <div style={{   }} className="row p-4 bg-white rounded-4"> {/* Estos estilos hacen que se pierda lo responsive*/}
          <div className="p-4" style={{ position: "relative", margin: "auto" }}>
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
                  <h5 style={{ fontWeight: "bold", color: "Black" }}>Nombre</h5>
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
                    <h5 style={{ fontWeight: "bold", color: "Black" }}>Sexo</h5>
                    <h4 style={{ fontWeight: "bold", color: "Black" }}>F/M</h4>
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

              <div className="col-12 col-md-6 d-flex">
                <div
                  className="p-3 mt-3 rounded-2"
                  style={{
                    width: "400px",
                    maxWidth: "100%",
                    height: "102px",
                    maxHeight: "100%",
                    backgroundColor: "#D9D9D9",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    margin: "auto",
                  }}
                >
                  <h5 style={{ fontWeight: "bold", color: "Black" }}>
                    Nacimiento
                  </h5>
                  <div className="card-body">
                    <div className="col-12 col-md-6 d-flex" style={{  }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className="datepicker-container">
                          <DatePicker
                            value={selectedDate}
                            onChange={handleDateChange}
                            format="DD-MM-YYYY"
                            minDate={currentDate}
                          />
                        </div>
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
