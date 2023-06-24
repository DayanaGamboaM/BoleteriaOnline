import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { BsSearch, BsGeoFill, BsPersonFillAdd } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import Swal from "sweetalert2";
import { RoutesContext } from "../src/contexts/RoutesContext";

import placesOrigin from "../public/placesOrigin.json";
import placesDestination from "../public/placesDestination.json";
import cantPerson from "../public/cantPerson.json";
import RoutesC from "./componentsRouteCalendar/RoutesC";

const Header = () => {
  const routesContext = useContext(RoutesContext);

  if (!routesContext) {
    // El contexto aún no está disponible, puedes mostrar un indicador de carga o una alternativa temporal.
    return <div>Loading...</div>;
  }

  const {
    selectedOrigin,
    selectedDestination,
    selectedDate,
    selectedPassengers,
    setOrigin,
    setDestination,
    setDate,
    setPassengers,
  } = routesContext;

  const [origen, setOrigen] = useState(selectedOrigin);
  const [destino, setDestino] = useState(selectedDestination);

  // const handleRouteSearch = (selectedOrigin: string, selectedDestination: string) => {
  //   setOrigen(selectedOrigin);
  //   setDestino(selectedDestination);
  // };

  const [showAlert, setShowAlert] = useState(false);
  const currentDate = dayjs(new Date());

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setDate(date);
    }
  };

  const handleSearchClick = (e: FormEvent) => {
    e.preventDefault();

    if (!selectedOrigin || !selectedDestination) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe llenar todos los campos",
      });
    } else {
      
      window.location.href = "routeCalendar";
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
                    <select
                      className="form-control"
                      id="origin"
                      value={selectedOrigin}
                      onChange={(e) => {
                        const selectedName = e.target.value;
                        const selectedPlace = placesOrigin.find(
                          (place) => place.name === selectedName
                        );
                        setOrigin(selectedPlace?.name || "");
                      }}
                    >
                      <option value="">Seleccione un origen</option>
                      {placesOrigin.map((place, index) => (
                        <option key={index} value={place.name}>
                          {place.name}
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
                      className="form-control"
                      id="destination"
                      value={selectedDestination}
                      onChange={(e) => {
                        const selectedName = e.target.value;
                        const selectedPlace = placesDestination.find(
                          (place) => place.name === selectedName
                        );
                        setDestination(selectedPlace?.name || "");
                      }}
                    >
                      <option value="">Seleccione un destino</option>
                      {placesDestination.map((place, index) => (
                        <option key={index} value={place.name}>
                          {place.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                <button
                  type="button"
                  className="btn btn-primary btn-block btn-lg"
                  onClick={handleSearchClick}
                  
                >
                  
                  Buscar
                </button>
                
      
              </div>
            </div>
          </div>
        </div>
      </div>
      <RoutesC origen={selectedOrigin} destino={selectedDestination} />
    </div>
  );
};

export default Header;
