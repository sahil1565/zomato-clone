import React from "react";
import Overview from "./Overview";
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

export function Restaurent1() {
  return (
    <>
      <Overview
        name="Gopals"
        img={img1}
        ratings="4.5"
        adress="VIP Road,Chandigarh"
        mealtype="North Indian, Fast Food"
        price="255"
      />
    </>
  );
}

export function Restaurent2() {
  return (
    <>
      <Overview
        name="Infantaria"
        img={img2}
        ratings="4.5"
        adress="Calangute - Baga Rd,Goa"
        mealtype="North Indian, Fast Food"
        price="455"
      />
    </>
  );
}

export function Restaurent3() {
  return (
    <>
      <Overview
        name="Burger King"
        img={img3}
        ratings="4.5"
        adress="Janpat,Delhi"
        mealtype="South Indian, Fast Food"
        price="999"
      />
    </>
  );
}

export function Restaurent4() {
  return (
    <>
      <Overview
        name="Eleven Spices"
        img={img4}
        ratings="4.3"
        adress="Gandhi nagar,Jammu"
        mealtype="North Indian, Fast Food"
        price="155"
      />
    </>
  );
}

export function Restaurent5() {
  return (
    <>
      <Overview
        name="Baba Ka Dhaba"
        img={img5}
        ratings="3.5"
        adress="Anand Vihar,Delhi"
        mealtype="North Indian, Fast Food"
        price="599"
      />
    </>
  );
}

export function Restaurent6() {
  return (
    <>
      <Overview
        name="KFC"
        img={img6}
        ratings="4.5"
        adress="MSP,Delhi"
        mealtype="South Indian, Fast Food"
        price="1100"
      />
    </>
  );
}

export function Restaurent7() {
  return (
    <>
      <Overview
        name="Domino's"
        img={img7}
        ratings="4.2"
        adress="Shalimar Bagh,Delhi"
        mealtype="North Indian, Fast Food"
        price="666"
      />
    </>
  );
}

export function Restaurent8() {
  return (
    <>
      <Overview
        name="Cafe S F Xavier"
        img={img8}
        ratings="4.5"
        adress="Mapusa,Goa"
        mealtype="North Indian, Fast Food"
        price="80"
      />
    </>
  );
}

export function Restaurent9() {
  return (
    <>
      <Overview
        name="Keventers"
        img={img9}
        ratings="4.5"
        adress="MSP,Pune"
        mealtype="North Indian, Fast Food"
        price="360"
      />
    </>
  );
}

export function Restaurent10() {
  return (
    <>
      <Overview
        name="Mad Over Donuts"
        img={img10}
        ratings="4.5"
        adress="BullaBhai Desai Road,Mumbai"
        mealtype="North Indian, Fast Food"
        price="150"
      />
    </>
  );
}

export function Restaurent11() {
  return (
    <>
      <Overview
        name="Mostly Grilly"
        img={img11}
        ratings="4.5"
        adress="Vile Parle East,Mumbai"
        mealtype="North Indian, Fast Food"
        price="6250"
      />
    </>
  );
}
