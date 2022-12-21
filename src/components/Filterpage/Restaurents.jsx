import React from "react";
import img1 from "../../images.filter/gopal.jpg";
import img2 from "../../images.filter/infant.jpg";
import img3 from "../../images.filter/BK.jpg";
import img4 from "../../images.filter/spice.jpg";
import img5 from "../../images.filter/BkDhaba.jpg";
import img6 from "../../images.filter/KFC.jpg";
import img7 from "../../images.filter/dominos.jpg";
import img8 from "../../images.filter/sf.jpg";
import img9 from "../../images.filter/keventers.jpg";
import img10 from "../../images.filter/donut.jpg";
import img11 from "../../images.filter/grills.jpg";

export default function Restaurent(props) {
  return (
    <>
      <div className="box p-2 shadow border cursor-pointer mb-4 searchResultFilterBox">
        <div className="d-flex flex-row">
          <img
            src={props.img}
            className="image cursor-pointer"
            alt="breakfast"
          />
          <div className="cursor-pointer">
            <h2 className=" fw-bold mx-3 mb-2 mt-3   indexColor restNameText">
              {props.name}
            </h2>
            <div className="d-flex flex-column mx-3 ">
              <div className="indexColor fw-bold ratingText ">
                <p className="my-lg-2 my-1">{props.ratings}</p>
              </div>
              <div className="thirdColor localityCity">
                <p>{props.adress}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hrline">
          <hr />
        </div>
        <div className="d-flex flex-row ">
          <div className="d-flex flex-column ms-3 fw-bold cuisine">
            CUISINES: <br />
            COST FOR TWO:
          </div>
          <div className="d-flex flex-column ms-3 fw-bold indexColor ms-5 bakery ">
            {props.mealtype}
            <br />
            &#8377;{props.price}
          </div>
        </div>
      </div>
    </>
  );
}
