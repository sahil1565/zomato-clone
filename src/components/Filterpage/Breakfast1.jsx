import React from "react";
import Navbar from "../Navbar/Navbar";
import Filterbox from "./Filterbox";
import Restaurents from "./Restaurents";

import img3 from "../../images.filter/BK.jpg";
import { useNavigate } from "react-router-dom";

export default function Breakfast() {
  let navigate = useNavigate();

  let getRestaurent3 = () => {
    navigate("/3");
  };

  let getBreakfast = () => {
    navigate("/breakfast");
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid ">
        <div className="row test">
          <div className="col-lg-11 col-10 ms-lg-5 ms-2 ps-0">
            <p className="fs-lg-1 fs-4 fw-bolder mx-lg-5 mx-4 my-4 indexColor">
              {`Best Places in this Area`}
            </p>

            <div className="d-flex mx-lg-5 justify-content-between flex-lg-row flex-column">
              <Filterbox />
              <div>
                <section onClick={() => getRestaurent3()}>
                  <Restaurents
                    name="Burger King"
                    img={img3}
                    ratings="4.5"
                    adress="Janpat,Delhi"
                    mealtype="South Indian, Fast Food"
                    price="999"
                  />
                </section>

                <div className="my-4 btn-main d-flex justify-content-center mx-0">
                  <button
                    className="btn btn-clr  ms-2"
                    onClick={() => getBreakfast()}>
                    1
                  </button>
                  <button className="btn btn-clr  ms-2">2</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
