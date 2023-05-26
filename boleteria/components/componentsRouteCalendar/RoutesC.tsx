import React from "react";
import { BsArrowRight } from "react-icons/bs";

const availableRoutes = [
  { hourI: "10:00", Origin: "San Jose", hourL: "05:00", Dest: "San Vito" },
  { hourI: "08:00", Origin: "San Jose", hourL: "12:00", Dest: "San Isidro" },
  { hourI: "01:00", Origin: "San Jose", hourL: "07:00", Dest: "Agua Buena" },
];

const RoutesC = () => {
  return (
    <div style={{ backgroundColor: "#d9d9d9" }}>
      <div className="container">
        {availableRoutes.map((rou, index) => (
          <div className="card-routes" key={index}>
            <div className="card-block-routes bg-white">
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-between w-100 flex-wrap">
                  <div className="d-flex flex-column align-items-start mb-3">
                    <div className="d-flex align-items-start mb-3 flex-wrap">
                      <h5
                        className="text-black"
                        style={{ marginRight: "10px" }}
                      >
                        Hora inicio:
                      </h5>
                      <div>{rou.hourI}</div>
                    </div>
                    <div className="d-flex align-items-start mb-3 flex-wrap">
                      <h5
                        className="text-black"
                        style={{ marginRight: "10px" }}
                      >
                        Origen:
                      </h5>
                      <div style={{ textDecoration: "underline" }}>
                        {rou.Origin}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-start mb-3">
                    <div className="d-flex align-items-start mb-3 flex-wrap">
                      <h5
                        className="text-black"
                        style={{ marginRight: "10px" }}
                      >
                        Hora llegada:
                      </h5>
                      <div>{rou.hourL}</div>
                    </div>
                    <div className="d-flex align-items-start mb-3 flex-wrap">
                      <h5
                        className="text-black"
                        style={{ marginRight: "10px" }}
                      >
                        Destino:
                      </h5>
                      <div style={{ textDecoration: "underline" }}>
                        {rou.Dest}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-center">
                    <h5 className="text-black mr-2">Total:</h5>
                    <span>$50.00</span>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center mt-3">
                  <a className="buy d-inline-block " href="paymentGateway">
                    Avanzar{" "}
                    <span
                      className="d-inline-block d-sm-none mx-auto"
                      style={{ width: "24px" }}
                    >
                      <BsArrowRight className="align-middle" />
                    </span>
                    <span className="d-none d-sm-inline-block">
                      <BsArrowRight className="align-middle" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutesC;
