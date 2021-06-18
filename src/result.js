import { useLoading } from "@agney/react-loading";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Result as R } from "./Components/elements";

const Result = ({ state }) => {
  const history = useHistory();
  useEffect(() => {
    if (!state) history.push("/");
  });
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  setTimeout(() => {
    setText(false);
  }, 2500);
  setTimeout(() => {
    setText(true);
  }, 4500);

  return (
    <>
      {loading ? (
        <section className="loader" {...containerProps}>
          {indicatorEl}
          {text ? <p>Calculating...</p> : <p>No dey rush me </p>}
        </section>
      ) : (
        <R className="result" state={state}>
          <span className="congrat">Congrats</span>
          <br /> your Gp is <br /> <span>{state} </span>
        </R>
      )}
    </>
  );
};

export default Result;
