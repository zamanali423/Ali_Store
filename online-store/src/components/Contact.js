import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { CreateContext } from "../auth/context/CreateContext";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigation = useNavigate();
  const { user } = useContext(CreateContext);
  const [userData, setUserData] = useState(true);

  const { setToken } = useContext(CreateContext);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  if (userData && user) {
    setData({
      username: user.username,
      email: user.email,
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const userRegister = async () => {
    // const response = await axios.post(
    //   "http://localhost:3002/authentication/user/register",
    //   data
    // );

    try {
      const response = await fetch(
        "http://localhost:3002/authentication/user/register",
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
          firstName: "",
          lastName: "",
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

        const tokenGenerate = dataGet.saveUser.tokens[0].token;
        setToken(tokenGenerate);
        localStorage.setItem("token", tokenGenerate);
      } else {
        // alert(dataGet.message ? dataGet.message : dataGet.extraDetails);
        toast.error(dataGet.message, {
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
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            name="username"
                            value={data.username}
                            onChange={handleInput}
                          />
                          <label className="form-label" htmlFor="form3Example1">
                          Username
                          </label>
                        </div>
                      </div>
                      
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        name="email"
                        value={data.email}
                        onChange={handleInput}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        name="password"
                        value={data.password}
                        onChange={handleInput}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={userRegister}
                    >
                      Send
                    </button>

                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
