import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";

const TravelDate = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    const currentDate = dayjs(new Date());

    const handleDateChange = (date: Dayjs | null) => {
        if (date) {
        setSelectedDate(date);
        }
    };

  dayjs.locale("es");

    return (
        <div className="container mt-5">
            <div className="card text-black" style={{ backgroundColor: '#D9D9D9', maxWidth: '35rem' }}>
                <div className="card-header">
                    <div className="d-flex align-items-center mr-3">
                        <span className="cuadro-azul text-white mr-5">2</span>
                        <span>Fecha de tu viaje</span>
                    </div>
                </div>
                <div className="card-body">
                <div className="flex-grow-1" style={{ maxWidth: "400px" }}>
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
    );
}

export default TravelDate;