import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color, index }) => {
  const { rgb, weight } = color;

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        navigator.clipboard.writeText(`${rgbToHex(...rgb)}`);
        setAlert(true);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};
export default SingleColor;
