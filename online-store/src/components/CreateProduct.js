import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigation = useNavigate();
  const [data, setData] = useState({
    fname: "",
    lname: "",
  });

  const addProduct = async () => {
    await axios.post("http://localhost:3002/api/createProduct", data);
    navigation("/");
    toast.success("Product Add Successfully", {
      position: "top-right",
    });
  };

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div class="row g-3">
          <div class="col">
            <input
              type="text"
              name="fname"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              value={data.fname}
              onChange={handleInput}
            />
          </div>
          <div class="col">
            <input
              type="text"
              name="lname"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              value={data.lname}
              onChange={handleInput}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={addProduct}>
          add data
        </button>
      </div>
    </>
  );
};

export default CreateProduct;
