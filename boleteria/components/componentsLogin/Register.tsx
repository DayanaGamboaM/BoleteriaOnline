import React, { useState, FormEvent } from "react";
import { auth } from "@/fireBase/app";
import Logo from "../../public/logoLogin.jpg";
import Image from "next/image";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/router";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const correo = form.email.value;
    const contrasenna = form.password.value;

    await createUserWithEmailAndPassword(auth, correo, contrasenna).then(() => {
      router.push("/");
    });
  };

  const handleBack = () => {
    router.push("/login"); 
  };

  return (
    <div id="register" style={{ backgroundColor: "#284B63" }}>
      <section className="vh-100" style={{ backgroundColor: "#284B63" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <Image
                      src={Logo}
                      alt="login form"
                      className="img-fluid"
                      width={700}
                      height={700}
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">
                            TRANSPORTE UNA
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Crea una cuenta
                        </h5>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="firstName"
                                className="form-control form-control-lg"
                                placeholder="Nombre"
                                name="firstName"
                                //value={signUpForm.firstName}
                                //onChange={handleChange}
                                //required
                              />
                              <label className="form-label">Nombre</label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="lastName"
                                className="form-control form-control-lg"
                                placeholder="Apellido"
                                name="lastName"
                                //value={signUpForm.lastName}
                                //onChange={handleChange}
                                //required
                              />
                              <label className="form-label">Apellido</label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="gender"
                                className="form-control form-control-lg"
                                placeholder="Género"
                                name="gender"
                                //value={signUpForm.gender}
                                //onChange={handleChange}
                                //required
                              />
                              <label className="form-label">Género</label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="date"
                                id="birthDate"
                                className="form-control form-control-lg"
                                placeholder="Fecha de Nacimiento"
                                name="birthDate"
                                //value={signUpForm.birthDate}
                                //onChange={handleChange}
                                //required
                              />
                              <label className="form-label">
                                Fecha de Nacimiento
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="email"
                                className="form-control form-control-lg"
                                placeholder="Correo Electrónico"
                                name="email"
                                //value={signUpForm.email}
                                //onChange={handleChange}
                                required
                              />
                              <label className="form-label">
                                Correo Electrónico
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                className="form-control form-control-lg"
                                placeholder="Contraseña"
                                name="password"
                                //value={signUpForm.password}
                                //onChange={handleChange}
                                required
                              />
                              <label className="form-label">Contraseña</label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="confirmPassword"
                                className="form-control form-control-lg"
                                placeholder="Confirmar Contraseña"
                                name="confirmPassword"
                                //value={signUpForm.confirmPassword}
                                //onChange={handleChange}
                                required
                              />
                              <label className="form-label">
                                Confirmar Contraseña
                              </label>
                            </div>

                            <div className="pt-1 mb-4">
                              <div className="row">
                                <div className="col-sm-6">
                                  <button className="btn btn-dark btn-lg" type="submit">
                                    Registrar
                                  </button>
                                </div>
                                <div className="col-sm-6">
                                  <button className="btn btn-dark btn-lg" type="button" onClick={handleBack}>
                                    Atrás
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* {error && <p className="text-danger">{error}</p>} */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
