import React, { useState, FormEvent } from "react";
import Logo from "../../public/logoLogin.jpg";
import Image from "next/image";
import { auth } from "../../src/fireBase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Swal from 'sweetalert2';


const Login = () => {
  const router = useRouter();
  const [register, setRegister] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const correo = form.ema.value;
    const contrasenna = form.pass.value;

    try {
      // Autenticar al usuario
      await signInWithEmailAndPassword(auth, correo, contrasenna);

      // Redirigir al usuario a la página de inicio
      router.push("/home");
    } catch (error) {
      // Manejar errores de autenticación
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al digitar los datos requeridos',
      });
      console.log("Error de autenticación:", error);
    }
  };

  return (
    <div>
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
                          <span className="h1 fw-bold mb-0">TRANSPORTE UNA</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Inicia sesion en tu cuenta
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="ema"
                            className="form-control form-control-lg"
                            placeholder="Ingresar correo"
                            required
                          />
                          <label className="form-label">Correo Electronico</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="pass"
                            className="form-control form-control-lg"
                            placeholder="Ingresar contraseña"
                            required
                          />
                          <label className="form-label">Contraseña</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">
                            Iniciar sesión
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Olvidaste la contraseña?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          No tienes una cuenta?{" "}
                          <a href="register" style={{ color: "#393f81" }}>
                            Registrate aquí
                          </a>
                        </p>
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

export default Login;
