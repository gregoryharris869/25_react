import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const { color, setColor } = useState("");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {}
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#000000" }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
      <button
        onClick={() =>
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Random Color
      </button>
    </div>
  );
};

export default RandomColor;
