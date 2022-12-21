import React from "react";
import img1 from "../../imgages.home/Breakfast.png";
import img2 from "../../imgages.home/Lunch.png";
import img3 from "../../imgages.home/Dinner.png";
import img4 from "../../imgages.home/Snacks.png";
import img5 from "../../imgages.home/Drinks.png";
import img6 from "../../imgages.home/Nightlife.png";
import { useNavigate } from "react-router-dom";

export default function AllMeals() {
  let navigate = useNavigate();

  let getBreakfast = () => {
    navigate("/breakfast");
  };

  let getLunch = () => {
    navigate("/lunch");
  };

  let getDinner = () => {
    navigate("/dinner");
  };

  let getDrinks = () => {
    navigate("/drinks");
  };

  let getSnacks = () => {
    navigate("/snacks");
  };

  let getNightlife = () => {
    navigate("/nightlife");
  };

  return (
    <div>
      <section className="row justify-content-center m-0 mt-lg-5 mt-md-4 mt-0">
        <section className="col-lg-11 col-11 mt-3">
          <h3 className="fw-bold indexColor quickText">Quick Searches</h3>
          <p className="text-secondary quickText2">
            Discover restaurants by type of meal
          </p>
        </section>

        <section className="col-11 ">
          <section className="row py-2">
            <section className="col-12 px-0 d-flex flex-lg-row flex-md-row flex-column justify-content-between flex-wrap ">
              <section
                className="px-0 d-flex box__section quick-search-item 
              shadow mb-4 position-relative"
                onClick={() => getBreakfast()}>
                <img src={img1} className="image-item img-fluid" />
                <div className="pt-3 px-2 ">
                  <h4 className="indexColor fw-semibold">Breakfast</h4>
                  <p className="small text-muted">
                    Start your day with exclusive Breakfast options
                  </p>
                </div>
              </section>

              <section
                className="px-0 d-flex box__section quick-search-item 
              shadow mb-4 position-relative"
                onClick={() => getLunch()}>
                <img src={img2} className="image-item img-fluid" />
                <div className="pt-3 px-2 ">
                  <h4 className="indexColor fw-semibold">Lunch</h4>
                  <p className="small text-muted">
                    Start your day with exclusive Lunch options
                  </p>
                </div>
              </section>

              <section
                className="px-0 d-flex box__section quick-search-item shadow
               mb-4 position-relative"
                onClick={() => getDinner()}>
                <img src={img3} className="image-item img-fluid" />
                <div className="pt-3 px-2 ">
                  <h4 className="indexColor fw-semibold">Dinner </h4>
                  <p className="small text-muted">
                    Start your day with exclusive Dinner options
                  </p>
                </div>
              </section>

              <section
                className="px-0 d-flex box__section quick-search-item shadow
               mb-4 position-relative"
                onClick={() => getSnacks()}>
                <img src={img4} className="image-item img-fluid" />
                <div className="pt-3 px-2 ">
                  <h4 className="indexColor fw-semibold">Snacks </h4>
                  <p className="small text-muted">
                    Start your day with exclusive Snacks options
                  </p>
                </div>
              </section>

              <section
                className="px-0 d-flex box__section quick-search-item shadow 
              mb-4 position-relative"
                onClick={() => getDrinks()}>
                <img src={img5} className="image-item img-fluid" />
                <div className="pt-3 px-2 ">
                  <h4 className="indexColor fw-semibold">Drinks </h4>
                  <p className="small text-muted">
                    Start your day with exclusive drinks options
                  </p>
                </div>
              </section>

              <section
                className="px-0 d-flex box__section quick-search-item shadow 
              mb-4 position-relative"
                onClick={() => getNightlife()}>
                <img src={img6} className="image-item img-fluid" />
                <div className="pt-3 px-2 ">
                  <h4 className="indexColor fw-semibold">Nightlife </h4>
                  <p className="small text-muted">
                    Start your day with exclusive Nightlife options
                  </p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
