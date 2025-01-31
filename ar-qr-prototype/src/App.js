// import React, { useState, useEffect } from "react";
// import { QRCodeCanvas } from "qrcode.react";

// const App = () => {
//   const [text, setText] = useState("0");

//   useEffect(() => {
//     let counter = 1;
//     const interval = setInterval(() => {
//       setText(`${counter++}`);
//     }, 3000); 

//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Dynamic QR Code</h1>
//       <QRCodeCanvas value={text} size={200} />
//       <p>QR Code Text: {text}</p>
//     </div>
//   );
// };

// export default App;


import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Scan QR for AR Text Test</h1>
      <QRCodeCanvas value="https://sburambekova.github.io/ARjs_Project/" size={200} />
      <p>Scan this QR code and look at the Hiro marker.</p>

      {/* AR Scene */}
      <a-scene embedded arjs style={{ width: "100%", height: "500px", margin: "20px auto" }}>
        <a-marker preset="hiro">
          <a-plane position="0 0 0" rotation="-90 0 0" width="3.5" height="3" color="white"></a-plane>

          <a-text 
            value="1️⃣ Large Text Example"
            position="0 1.2 0"
            align="center"
            color="black"
            scale="1.5 1.5 1"
            width="2.5"
          ></a-text>

          <a-text 
            value="2️⃣ Medium Text Example"
            position="0 0.8 0"
            align="center"
            color="black"
            scale="1.3 1.3 1"
            width="2.5"
          ></a-text>

        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default App;

