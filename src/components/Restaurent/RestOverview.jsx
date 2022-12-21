import React from "react";
import { Modal, ModalHeader, ModalBody, Row } from "reactstrap";
import { useState } from "react";

export default function RestOverview() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          this is working
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
                    <input type="email" class="form-control" id="inputEmail4" />
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
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">
                      Pin
                    </label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">
                      Ammount
                    </label>
                    <input type="text" class="form-control" id="inputZip" />
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

      <button className="btn-btn-primary" onClick={() => setModal(true)}>
        hello
      </button>
    </div>
  );
}
