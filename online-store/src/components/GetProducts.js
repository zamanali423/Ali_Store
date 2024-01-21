import { useContext } from "react";
import { CreateContext } from "../auth/context/CreateContext";

const GetProducts = () => {
  const { products } = useContext(CreateContext);
  return (
    <>
      <div className="container cardMain">
        {products.map((items) => (
          <div className="card my-3" style={{ width: "18rem"}}>
            <img
              src={items.thumbnail}
              className="card-img-top imgCard"
              alt="Loading..."
            />
            <div className="card-body">
              <h5 className="card-title">{items.title}</h5>
              <p className="card-text">{items.description.slice(1,50)}...</p>
              <a href="#" className="btn btn-primary">
                Add
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetProducts;
