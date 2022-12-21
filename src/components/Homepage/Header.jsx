import React from "react";
import Nav1 from "./Nav1";

export default function Header() {
  return (
    <>
      <section>
        <div className="bg__image ">
          <Nav1 />

          <div className="d-lg-flex justify-content-center d-md-flex d-none mainE">
            <h1 className="mt-4 mb-lg-0 mb-2 logo d-flex p-0 justify-content-center align-items-center fw-bold bg-white rounded-circle">
              e!
            </h1>
          </div>

          <p className="text-sm-center d-flex justify-content-center header__text text-white fw-bold text-lg-center h2 text-center mb-lg-4 mb-1 mt-lg-3 p-1">
            Find the best restaurants, cafés, and bars
          </p>

          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 col-md-7 col-10  ">
              <div class="row d-flex mb-lg-5 position-absolute m-0">
                <div class="col-lg-5 col-11 left-search__main ms-lg-5 position-relative">
                  <input
                    list="locations"
                    type="text"
                    class="form-control  p-3 "
                    placeholder="Please type a location"
                  />
                  <div class="list-group position-relative testingZ"></div>
                </div>
                <div class="col-lg-6 mt-2 mt-lg-0 col-11 ">
                  <img
                    style={{ width: "20px" }}
                    src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"
                    alt=""
                    class="bx bx-search-alt-2 search__logo ms-3 position-absolute text-muted fs-4"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    class="form-control p-3 ps-5 ms-1 "
                    placeholder="Search for Restaurants"
                    disabled=""
                  />
                  <div class="list-group position-relative cursor-pointer ms-1 Zindex"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
