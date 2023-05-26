import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo-bus.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="container">
      
        <div className="card-section d-flex justify-content-center">
          <div className="container">
            <div
              className="card-block bg-white d-flex flex-wrap justify-content-center"
              style={{ maxWidth: "100%", borderRadius: 20 }}
            >
              <div
                className="card-State mb-3 text-center d-flex  align-items-center flex-column"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  background: "#D9D9D9",
                  flex: "0 0 400px",
                  maxWidth: "100%",
                }}
              >
                <div className="card-body">
                  <h5 className="card-text" style={{ fontWeight: "bold" }}>
                    Activos
                  </h5>
                </div>
              </div>
              <div
                className="card-State mb-3 text-center d-flex  align-items-center flex-column"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  background: "#D9D9D9",
                  flex: "0 0 400px",
                  maxWidth: "100%",
                }}
              >
                <div className="card-body">
                  <h5 className="card-text" style={{ fontWeight: "bold" }}>
                    Consumidos
                  </h5>
                </div>
              </div>
              <div className="container d-flex justify-content-start">
                <div
                  className="card"
                  style={{
                    maxWidth: "100%",
                    width: "150px",
                    background: "#D9D9D9",
                    marginLeft: "170px",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker format="DD-MM-YYYY" />
                  </LocalizationProvider>
                </div>
                <div
                  className="card"
                  style={{
                    maxWidth: "100%",
                    width: "150px",
                    background: "#D9D9D9",
                    marginLeft: "100px",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker format="DD-MM-YYYY" />
                  </LocalizationProvider>
                </div>
                <Button
                  variant="ligth"
                  className="btn btn-costume"
                  style={{
                    background: "#FFBF44",
                    color: "black",
                    marginLeft: "100px",
                    maxWidth: "100%",
                    width: "200px",
                    maxHeight: "100%",
                    height: "40px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    style={{ marginRight: "100px" }}
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Hero;
