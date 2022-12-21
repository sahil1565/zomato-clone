import React from "react";
import Navbar from "../Navbar/Navbar";
import { Modal, ModalHeader, ModalBody, Row } from "reactstrap";
import { useState } from "react";
export default function Overview(props) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container-fluid d-flex justify-content-center row flex-column ">
        <div className="col-lg-10 col-md-10 col-10 marginContainer  ">
          <div className="row">
            <div className="col-12 mt-lg-5 mt-md-5 mt-3 ">
              <div className="restOverviewImgContainer ">
                <img
                  src={props.img}
                  alt="Restaurant"
                  className="resOverviewImg img-fluid"
                />
                <button
                  className="btn position-absolute btn-outline-light resOverviewBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#slideshow">
                  Click to See Image Gallery
                </button>
              </div>

              <h2 className="mt-3 fw-bold indexColor"> {props.name}</h2>
              <div className="d-flex justify-content-end orderDiv">
                <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
                  <ModalHeader toggle={() => setModal(!modal)}>
                    Payment
                    <ModalBody>
                      <form>
                        <Row>
                          <div class="row g-3">
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="First name"
                                aria-label="First name"
                              />
                            </div>
                            <div class="col">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Last name"
                                aria-label="Last name"
                              />
                            </div>
                          </div>

                          <form class="row g-3">
                            <div class="col-md-6">
                              <label for="inputEmail4" class="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail4"
                              />
                            </div>
                            <div class="col-md-6">
                              <label for="inputPassword4" class="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword4"
                              />
                            </div>
                            <div class="col-12">
                              <label for="inputAddress" class="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                              />
                            </div>
                            <div class="col-12">
                              <label for="inputAddress2" class="form-label">
                                Credit Card/Debit Card Number
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputAddress2"
                                placeholder="0000/0000/0000/0000"
                              />
                            </div>
                            <div class="col-md-6">
                              <label for="inputCity" class="form-label">
                                Expiry
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputCity"
                              />
                            </div>
                            <div class="col-md-4">
                              <label for="inputState" class="form-label">
                                Pin
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputZip"
                              />
                            </div>
                            <div class="col-md-2">
                              <label for="inputZip" class="form-label">
                                Ammount
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputZip"
                              />
                            </div>
                            <div class="col-12">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label class="form-check-label" for="gridCheck">
                                  Check me out
                                </label>
                              </div>
                            </div>
                            <div class="col-12">
                              <button type="submit" class="btn btn-danger">
                                Proceed
                              </button>
                            </div>
                          </form>
                        </Row>
                      </form>
                    </ModalBody>
                  </ModalHeader>
                </Modal>
                <a
                  onClick={() => setModal(true)}
                  className="btn btnOrder  "
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button">
                  Place the order
                </a>
              </div>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true">
                  About
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false">
                    contact
                  </button>
                </li>
              </ul>

              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0">
                  <div className="mt-4">
                    <h5 className="indexColor fw-medium mb-2 ">
                      About this Place
                    </h5>
                    <p className="indexColor mt-5 mb-3 fw-bold"> Cuisine</p>
                    <p className="indexColor mb-4">{props.mealtype}</p>
                    <p className="indexColor mt-5 mb-3 fw-bold">Average Cost</p>
                    <p className="indexColor mb-4">
                      &#8377; {props.price} for two people(approx.)
                    </p>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0">
                  <div className="mt-4">
                    <p className="indexColor mt-3 mb-2 fw-bold">Phone Number</p>
                    <p className="indexColor mb-2 p-no">+919194536651</p>
                    <p className="indexColor mt-5 mb-3 fw-bold">{props.name}</p>
                    <p className="indexColor mb-4">{props.adress}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*function name() {
  return (
    <>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true">
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false">
            Profile
          </button>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0">
          <div className="mt-4">
            <h5 className="indexColor fw-medium mb-2 ">About this Place</h5>
            <p className="indexColor mt-5 mb-3 fw-bold"> Cuisine</p>
            <p className="indexColor mb-4">{props.mealtype}</p>
            <p className="indexColor mt-5 mb-3 fw-bold">Average Cost</p>
            <p className="indexColor mb-4">
              &#8377; {props.price} for two people(approx.)
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0">
          <div className="mt-4">
            <p className="indexColor mt-3 mb-2 fw-bold">Phone Number</p>
            <p className="indexColor mb-2 p-no">+919194536651</p>
            <p className="indexColor mt-5 mb-3 fw-bold">{props.name}</p>
            <p className="indexColor mb-4">{props.adress}</p>
          </div>
        </div>
      </div>
    </>
  );
}*/
