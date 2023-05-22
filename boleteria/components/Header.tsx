import React, { useState } from "react";
import { BsSearch, BsGeoFill, BsPersonFillAdd, BsCalendarFill } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Header = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
  return (
    <div>
      <div className="page-header">
        <h2 className="d-flex align-items-start justify-content-center page-title">
          TRANSPORTE UNA
        </h2>
      </div>
      <div className="card-section">
        <div className="container">
          <div className="card-block bg-white mb30">
          <div className="row mt-9">
                <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-12">
                    <p className="cardBlock-titles">Origen</p>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-text text-black"><BsGeoFill /></span>
                                <select className="form-select" aria-label="Select origin">
                                    <option value="">Origen</option>
                                        {/* Opciones de origen */}
                                </select>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-12">
                    <p className="cardBlock-titles">Destino</p>
                <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-text text-black"><BsGeoFill /></span>
                                <select className="form-select" aria-label="Select destination">
                                    <option value="">Destino</option>
                                        {/* Opciones de destino */}
                                </select>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-2 col-sm-6 col-12">
                    <p className="cardBlock-titles">Pasajeros</p>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-text text-black"><BsPersonFillAdd /></span>
                                <select className="form-select" aria-label="Select passengers">
                                    <option value="">Pasajeros</option>
                                        {/* Opciones de pasajeros */}
                                </select>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                    <p className="cardBlock-titles">Fecha</p>
                    <div className="form-group">
                        <div className="d-flex align-items-center input-group">
                            <span className="input-group-text text-black"><BsCalendarFill /></span>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    placeholderText="Fecha"
                                />
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-5">
                    <a className="search" href="#pagina">
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
