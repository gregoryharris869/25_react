import { useEffect, useState, useRef, useCallback } from "react";
import "./style.css";

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColorUtility(length) {
  return Math.floor(Math.random() * length);
}

export default function RandomColor() {
  const effectRan = useRef(false);
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomHexColor = useCallback(() => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }, []);

  const handleCreateRandomRgbColor = useCallback(() => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }, []);

  useEffect(() => {
    if (!effectRan.current) {
      if (typeOfColor === "rgb") handleCreateRandomRgbColor();
      else handleCreateRandomHexColor();
    }
  }, [typeOfColor, handleCreateRandomRgbColor, handleCreateRandomHexColor]);

  return (
    <div className="container" style={{ background: color }}>
      <div className="btnGroup">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div className="button-container">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
