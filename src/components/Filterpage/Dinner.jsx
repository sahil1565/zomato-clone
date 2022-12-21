import React from "react";
import Navbar from "../Navbar/Navbar";
import Filterbox from "./Filterbox";
import Restaurents from "./Restaurents";
import img7 from "../../images.filter/dominos.jpg";
import { useNavigate } from "react-router-dom";
export default function Dinner() {
  let navigate = useNavigate();

  let getRestaurent7 = () => {
    navigate("/7");
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
              <div onClick={() => getRestaurent7()}>
                <Restaurents
                  name="Domino's"
                  img={img7}
                  ratings="4.2"
                  adress="Shalimar Bagh,Delhi"
                  mealtype="North Indian, Fast Food"
                  price="666"
                />

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
