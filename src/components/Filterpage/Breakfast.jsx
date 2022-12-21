import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Filterbox from "./Filterbox";
import Restaurents from "./Restaurents";
import img1 from "../../images.filter/gopal.jpg";
import img2 from "../../images.filter/infant.jpg";
import { useNavigate } from "react-router-dom";

export default function Breakfast() {
  let navigate = useNavigate();

  let getRestaurent1 = () => {
    navigate("/1");
  };

  let getRestaurent2 = () => {
    navigate("/2");
  };

  let getBreakfast1 = () => {
    navigate("/breakfast1");
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
                <section onClick={() => getRestaurent1()}>
                  <Restaurents
                    name="Gopals"
                    img={img1}
                    ratings="4.5"
                    adress="VIP Road,Chandigarh"
                    mealtype="North Indian, Fast Food"
                    price="255"
                  />
                </section>
                <section onClick={() => getRestaurent2()}>
                  <Restaurents
                    name="Infantaria"
                    img={img2}
                    ratings="4.5"
                    adress="Calangute - Baga Rd,Goa"
                    mealtype="North Indian, Fast Food"
                    price="455"
                  />
                </section>

                <div className="my-4 btn-main d-flex justify-content-center mx-0">
                  <button className="btn btn-clr  ms-2">1</button>
                  <button
                    className="btn btn-clr  ms-2"
                    onClick={() => getBreakfast1()}>
                    2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
