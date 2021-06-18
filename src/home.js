import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import getScore from "./calculate";
import Course from "./Components/Course";
import { Form } from "./Components/elements";
import { FaEmpire, FaMinus, FaPlus } from "react-icons/fa";

const Home = ({ setState }) => {
  const [courseNumber, setCourse] = useState(3);

  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const courses = document.querySelectorAll(".course");
    const data = [];
    courses.forEach((e) => {
      const [gradeTag, unitTag] = e.childNodes;
      const grade = gradeTag.value;
      const unit = unitTag.value;
      //validate before push
      if (grade && unit)
        data.push({ grade: Number(grade), unit: Number(unit) });
      if (grade === "" && unit === "") {
        //focus to be red
        gradeTag.classList.add("error");
        unitTag.classList.add("error");
      } else if (unit === "" || grade === "") {
        unit === ""
          ? unitTag.classList.add("error")
          : gradeTag.classList.add("error");
      }
    });
    console.log(data.length, courses.length, data);
    if (data.length === courses.length) {
      const GP = getScore(data);
      history.push("result");

      setState(GP);
    }
  }
  const course = Array.from(Array(courseNumber).keys());
  const [small, setSmall] = useState(true);
  setTimeout(() => {
    setSmall(false);
  }, 4000);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h4 className="top-text">Gp Calculator</h4>
        <FaEmpire />
        {course.map((e, i) => (
          <Course key={i} />
        ))}
        <button type="submit">Calculate</button>
      </Form>

      <div className="btns">
        <div className="div">
          <FaMinus
            className="minus"
            onClick={() => {
              if (courseNumber >= 4) setCourse(courseNumber - 1);
            }}
          />
          {small && <small>Remove course</small>}
        </div>
        <div className="div">
          <FaPlus
            className="plus"
            onClick={() => {
              setCourse(courseNumber + 1);
            }}
          />
          {small && <small>Add course</small>}
        </div>
      </div>
      <h6>
        Made with{" "}
        <span className="emoji" role="img" aria-label="emoji">
          ❤️
        </span>{" "}
        from <br />
        <a href="https://api.whatsapp.com/send?phone=2349034664244&text=just%20checking%20your%20app">
          Node_X
        </a>{" "}
        &{" "}
        <a href="https://api.whatsapp.com/send?phone=2349077968091&text=just%20checking%20your%20app">
          Terabyte
        </a>
      </h6>
    </>
  );
};

export default Home;
