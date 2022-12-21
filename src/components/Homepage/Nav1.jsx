import React from "react";

export default function Navbar() {
  //const [modal, setModal] = useState(false);

  return (
    <>
      <section
        className={
          "d-flex flex-row text-center justify-content-between header  "
        }>
        <div className="ms-lg-5 ms-2 mt-2 cursor-pointer ">
          <p
            className={"logo mt-lg-2 mt-4 bg-white rounded-circle secondLogo "}>
            e!
          </p>
        </div>
        <div className="d-flex flex-row justify-content-end  pe-lg-5 pe-4 mt-2">
          <a href="/">
            {" "}
            <button
              type="button"
              className=" btn mt-lg-3 me-lg-4 me-1  mt-4 btn btn-outline-light">
              Log In
            </button>
          </a>
          <a href="/">
            <button
              type="button"
              className=" btn border-white mt-lg-3  mt-4  me-1 btn btn-outline-light">
              create an account
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
