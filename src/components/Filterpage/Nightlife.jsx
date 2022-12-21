import React from "react";
import Navbar from "../Navbar/Navbar";
import Filterbox from "./Filterbox";
import Restaurents from "./Restaurents";
import img10 from "../../images.filter/donut.jpg";
import img11 from "../../images.filter/grills.jpg";
import { useNavigate } from "react-router-dom";

export default function Nightife() {
  let navigate = useNavigate();

  let getRestaurent10 = () => {
    navigate("/10");
  };

  let getRestaurent11 = () => {
    navigate("/11");
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
                <section onClick={() => getRestaurent10()}>
                  <Restaurents
                    name="Mad Over Donuts"
                    img={img10}
                    ratings="4.5"
                    adress="BullaBhai Desai Road,Mumbai"
                    mealtype="North Indian, Fast Food"
                    price="150"
                  />
                </section>
                <section onClick={() => getRestaurent11()}>
                  <Restaurents
                    name="Mostly Grilly"
                    img={img11}
                    ratings="4.5"
                    adress="Vile Parle East,Mumbai"
                    mealtype="North Indian, Fast Food"
                    price="6250"
                  />
                </section>
                <div className="my-4 btn-main d-flex justify-content-center mx-0">
                  <button className="btn btn-clr  ms-2">1</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
