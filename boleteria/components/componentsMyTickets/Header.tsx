import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { BsSearch } from "react-icons/bs";

const Header = () => {
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
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mx-3 my-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="datepicker-containerT">
                    <DatePicker format="DD-MM-YYYY" />
                  </div>
                </LocalizationProvider>
              </div>

              <div className="mx-3 my-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="datepicker-containerT">
                    <DatePicker format="DD-MM-YYYY" />
                  </div>
                </LocalizationProvider>
              </div>

              <a
                className="principalButton d-flex justify-content-center align-items-center mx-3 my-2"
                href="myTicketsQR"
                style={{ width: "150px", height: "40px" }}
              >
                <BsSearch style={{ marginRight: "5px" }} /> Buscar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
