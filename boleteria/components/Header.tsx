import React, { useState } from "react";
import { BsSearch, BsGeoFill, BsPersonFillAdd } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";

import placesOrigin from "../public/placesOrigin.json";
import placesDestination from "../public/placesDestination.json";
import cantPerson from "../public/cantPerson.json";

const Header = () => {

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const currentDate = dayjs(new Date());

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  dayjs.locale("es");

  return (
    <div style={{ backgroundColor: "#d9d9d9" }}>
      <div className="card-section">
        <div className="container">
          <div className="card-block bg-white mb30">
            <div className="row mt-9">
              <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-12">
                <p className="cardBlock-titles">Origen</p>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-text text-black">
                      <BsGeoFill />
                    </span>
                    <select className="form-select" aria-label="Select origin">
                      <option value="">Origen</option>
                      {placesOrigin.map((origin) => (
                        <option key={origin.id} value={origin.name}>
                          {origin.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-12">
                <p className="cardBlock-titles">Destino</p>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-text text-black">
                      <BsGeoFill />
                    </span>
                    <select
                      className="form-select"
                      aria-label="Select destination"
                    >
                      <option value="">Destino</option>
                      {placesDestination.map((destination) => (
                        <option key={destination.id} value={destination.name}>
                          {destination.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-2 col-sm-6 col-12">
                <p className="cardBlock-titles">Pasajeros</p>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-text text-black">
                      <BsPersonFillAdd />
                    </span>
                    <select
                      className="form-select"
                      aria-label="Select passenger"
                    >
                      <option value="">Pasajeros</option>
                      {cantPerson.map((cant) => (
                        <option key={cant.id} value={cant.number}>
                          {cant.number}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-2 col-sm-6 col-12">
                <p className="cardBlock-titles">Fecha</p>
                <div className="form-group d-flex align-items-center">
                  <div className="flex-grow-1" style={{ maxWidth: "200px" }}>
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
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-5">
                <a className="principalButton" href="routeCalendar">
                  <BsSearch /> Buscar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
