import React from "react";

const Selection = ({ type }) => {
  const grades = ["A", "B", "C", "D", "E", "F"];
  const units = [1, 2, 3, 4, 5, 6];
  return (
    <select
      name="unit"
      id=""
      onClick={(e) => {
        e.target.classList.remove("error");
      }}
    >
      <option value='' disabled selected>
        {type === "unit" ? "Enter Unit" : "Enter Grade"}
      </option>
      {type === "unit"
        ? units.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))
        : grades.map((e, i) => (
            <option key={i} value={grades.length - i - 1}>
              {e}
            </option>
          ))}
    </select>
  );
};

export default Selection;
