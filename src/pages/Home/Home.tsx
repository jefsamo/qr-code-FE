import { useState } from "react";
import "./home.css";

const Home = () => {
  const [qrCodeUrl, setQRCodeUrl] = useState("");

  const getQR = async () => {
    const response = await fetch("https://qr-generator-0dsd.onrender.com/qr");
    const url = await response.text();
    setQRCodeUrl(url);
  };

  const onGenerateQR = () => {
    getQR();
  };

  return (
    <div className="home">
      <button className="qr" onClick={onGenerateQR}>
        Generate QR code
      </button>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
};

export default Home;
