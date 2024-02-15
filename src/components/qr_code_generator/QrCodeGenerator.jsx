import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGeneratorQrCode() {
    setQrCode(input);
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <section>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter text."
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGeneratorQrCode}
        >
          Generate
        </button>
      </section>
      <section>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </section>
    </div>
  );
};

export default QrCodeGenerator;
