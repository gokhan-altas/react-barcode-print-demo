import React, { useEffect, useRef, useState } from "react";

function VideoBarcodeReader() {
  const video = useRef(null);
  const canvas = useRef(null);
  const [barcode, setBarcode] = useState(null);

  const camera = {
    width: "100%",
  };

  const openCam = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 1280, height: 720, facingMode: 'environment' } })
      .then((stream) => {
        video.current.srcObject = stream;
        video.current.play();

        const ctx = canvas.current.getContext("2d");
        const barcode = new window.BarcodeDetector({
          formats: ["qr_code", "ean_13"],
        });

        setInterval(() => {
          canvas.current.width = video.current.videoWidth;
          canvas.current.height = video.current.videoHeight;
          ctx.drawImage(
            video.current,
            0,
            0,
            video.current.videoWidth,
            video.current.videoHeight
          );
          barcode
            .detect(canvas.current)
            .then(([data]) => {
              if(data) {setBarcode(data.rawValue)}
            })
            .catch((err) => console.log("SSS", err));
        }, 100);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={openCam}>Kamerayı Aç</button>
      <div>
        <video ref={video} autoPlay muted hidden />
        <canvas style={camera} ref={canvas} />
        {barcode && <div>
          Bulunan Barkod: {barcode }
          </div>}
      </div>
    </div>
  );
}

export default VideoBarcodeReader;
