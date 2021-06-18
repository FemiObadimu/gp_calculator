import React from "react";
import { Link } from "react-router-dom";

const start = () => {
  return (
    <div>
      <div className="container all-center">
        <div className="box text-center">
          <i className="fa fa-empire fa-5x"></i>
          <div className="text-b">Gp Calculator</div>

          <div className="small">
            Introducing to you this simple and easy to use GP and CGPA
            calculator, Simply input your score and the required units , then
            click calculate to sort out your Gp. The subtract and add buttons at
            the buttom are used to remove and add course respectively
          </div>
          <p>
            <i className="fa fa-angle-double-right"></i>
            <i className="fa fa-angle-double-right"></i>
          </p>
          <Link to="/home" className="btn btn-primary btn-end">
            Get Started
          </Link>
        </div>
      </div>
      <div className="foot all-center">
        <div className=" text-center py-1 ">
          <Link to="www.facebook.com/emanuelone">
            <i className="fa fa-facebook fa-2x"></i>
          </Link>
          <a href="https://www.instagram.com/devsinstitute">
            <i className="fa fa-instagram fa-2x"></i>
          </a>

          <a href="https://api.whatsapp.com/send?phone=2349034664244&text=just%20checking%20your%20app%20to%20give%20a%20nice%20feedback">
            <i className="fa fa-whatsapp fa-2x"></i>
          </a>
        </div>
        <div className="text-center">
          <span className="link">
            &copy; Copyright 2021 Gp Calculate <br />
            <a href="https://api.whatsapp.com/send?phone=2349034664244&text=just%20checking%20your%20app%20to%20give%20a%20nice%20feedback">
              Node_X
            </a>{" "}
            |{" "}
            <a href="https://api.whatsapp.com/send?phone=2349077968091&text=just%20checking%20your%20app%20to%20give%20a%20nice%20feedback">
              Terabyte
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default start;
