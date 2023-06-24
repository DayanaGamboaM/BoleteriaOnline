import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { getFirestore, collection, getDocs, DocumentData } from "firebase/firestore";
import { app } from "../../src/fireBase/app";

const firestore = getFirestore(app);

interface RoutesCProps {
  origen: string;
  destino: string;
}

const RoutesC: React.FC<RoutesCProps> = ({ origen, destino }) => {
  const [availableRoutes, setAvailableRoutes] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const routesRef = collection(firestore, "routes");
        const snapshot = await getDocs(routesRef);
        const routes: DocumentData[] = snapshot.docs.map((doc) => doc.data());

        // Filtrar las rutas por origen y destino
        const filteredRoutes = routes.filter(
          (route) => route.origin === origen && route.destination === destino
        );

        setAvailableRoutes(filteredRoutes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [origen, destino]);

  return (
    <div style={{ backgroundColor: "#d9d9d9" }}>
      <div className="container">
        {availableRoutes.map((route: DocumentData, index: number) => (
          <div className="card-routes" key={index}>
            <div className="card-block-routes bg-white">
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-between w-100 flex-wrap">
                  <div className="d-flex flex-column align-items-start mb-3">
                    <div className="d-flex align-items-start mb-3 flex-wrap">
                      <h5 className="text-black" style={{ marginRight: "10px" }}>
                        Origen:
                      </h5>
                      <div style={{ textDecoration: "underline" }}>{route.origin}</div>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-start mb-3">
                    <div className="d-flex align-items-start mb-3 flex-wrap">
                      <h5 className="text-black" style={{ marginRight: "10px" }}>
                        Destino:
                      </h5>
                      <div style={{ textDecoration: "underline" }}>{route.destination}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-center">
                    <h5 className="text-black mr-2">Total:</h5>
                    <span>${route.total}</span>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center mt-3">
                  <a className="buy d-inline-block" href="paymentGateway">
                    Avanzar{" "}
                    <span className="d-inline-block d-sm-none mx-auto" style={{ width: "24px" }}>
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
