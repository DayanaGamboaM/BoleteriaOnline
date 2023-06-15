import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { Button } from "react-bootstrap";
import { auth } from "@/fireBase/app";
import { firestore } from "@/fireBase/app";
import { doc, getDoc } from "firebase/firestore";


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

  //-------------------NOMBRE----------------------------------\\
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const getUserName = async () => {
      // Verificar si los datos del usuario están almacenados en el Local Storage
      const storedUserName = localStorage.getItem("userName");
      if (storedUserName) {
        setUserName(storedUserName);
      } else {
        // Si no hay datos en el Local Storage, obtener los datos del usuario desde Firestore
        if (auth.currentUser) {
          const userId = auth.currentUser.uid;
          const userRef = doc(firestore, "users", userId);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const name = userDoc.data().name;
            setUserName(name);
            // Guardar los datos del usuario en el Local Storage para futuras visitas
            localStorage.setItem("userName", name);
          }
        }
      }
    };

    getUserName();
  }, []);

  //-------------------APELLIDO----------------------------------\\
  const [userLastName, setUserLastName] = useState<string>("");

  useEffect(() => {
    const getUserLastName = async () => {
      // Verificar si los datos del usuario están almacenados en el Local Storage
      const storedUserLastName = localStorage.getItem("userLastName");
      if (storedUserLastName) {
        setUserLastName(storedUserLastName);
      } else {
        // Si no hay datos en el Local Storage, obtener los datos del usuario desde Firestore
        if (auth.currentUser) {
          const userId = auth.currentUser.uid;
          const userRef = doc(firestore, "users", userId);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const lastName = userDoc.data().lastName; // Asegúrate de ajustar el campo "name" según la estructura de tu documento en Firestore
            setUserLastName(lastName);
            // Guardar los datos del usuario en el Local Storage para futuras visitas
            localStorage.setItem("userLastName", lastName);
          }
        }
      }
    };

    getUserLastName();
  }, []);


  //Hacer cambio en género//
  //-------------------GENERO----------------------------------\\
  const [userGender, setGender] = useState<string>("");

  useEffect(() => {
    const getGender = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userRef = doc(firestore, "users", userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const gender = userDoc.data().gender; // Asegúrate de ajustar el campo "name" según la estructura de tu documento en Firestore
          setGender(gender);
        }
      }
    };

    getGender();
  }, []);


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
                    {userName}
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
                    {userLastName}
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
                    <h4 style={{ fontWeight: "bold", color: "Black" }}>{userGender}</h4>
                  </div>
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
