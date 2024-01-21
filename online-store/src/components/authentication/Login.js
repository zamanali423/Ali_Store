import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CreateContext } from "../../auth/context/CreateContext";

const Login = () => {
  const navigation = useNavigate();
  
  const { setToken } = useContext(CreateContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const userLogin = async () => {
    // const response = await axios.post(
    //   "http://localhost:3002/authentication/user/login",
    //   data
    // );
    try {
      const response = await fetch(
        "http://localhost:3002/authentication/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const dataGet = await response.json();
      if (response.ok) {
        setData({
          email: "",
          password: "",
        });
        navigation("/");

        toast.success(dataGet.message, {
          position: "top-right",
          style: {
            border: "1px solid #713200",
            padding: "10px",
            color: "white",
            backgroundColor: "green",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });

        const tokenVerify = dataGet.existEmail.tokens[0].token;
        setToken(tokenVerify);
        localStorage.setItem("token", tokenVerify);
      } else {
        if (data.email === "") {
          // alert(dataGet.extraDetails);
          toast.error(dataGet.extraDetails, {
            position: "top-right",
            style: {
              border: "1px solid #713200",
              padding: "10px",
              color: "white",
              backgroundColor: "red",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
        } else {
          toast.error(
            dataGet.message ? dataGet.message : dataGet.extraDetails,
            {
              position: "top-right",
              style: {
                border: "1px solid #713200",
                padding: "10px",
                color: "white",
                backgroundColor: "red",
              },
              iconTheme: {
                primary: "#713200",
                secondary: "#FFFAEE",
              },
            }
          );
        }
        // alert(dataGet.message ? dataGet.message : dataGet.extraDetails);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
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
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name="email"
                            value={data.email}
                            onChange={handleInput}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name="password"
                            value={data.password}
                            onChange={handleInput}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={userLogin}
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
