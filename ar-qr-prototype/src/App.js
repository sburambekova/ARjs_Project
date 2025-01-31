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

const qrValue = "https://sburambekova.github.io/ARjs_Project/"; // Replace with your hosted URL

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>AR Text Visibility Test</h1>
      <QRCodeCanvas value={qrValue} size={200} />
      <p>Scan the QR code, move your phone, and find the last fully readable number.</p>

      {/* AR Scene */}
      <a-scene embedded arjs style={{ width: "100%", height: "500px", margin: "20px auto" }}>
        {/* Marker for AR */}
        <a-marker preset="hiro">
          {/* White background for readability */}
          <a-plane position="0 0 0" rotation="-90 0 0" width="3.5" height="3" color="white"></a-plane>

          {/* 1️⃣ Short sentence */}
          <a-text 
            value="1️⃣ This is a short text."
            position="0 1.2 0"
            align="center"
            color="black"
            scale="1.5 1.5 1"
            width="2.5"
          ></a-text>

          {/* 2️⃣ Medium sentence */}
          <a-text 
            value="2️⃣ This is a slightly longer text that contains more words."
            position="0 0.8 0"
            align="center"
            color="black"
            scale="1.3 1.3 1"
            width="2.5"
          ></a-text>

          {/* 3️⃣ Longer paragraph */}
          <a-text 
            value="3️⃣ This paragraph contains enough information to test readability limits. It should still be clearly visible from a comfortable distance."
            position="0 0.4 0"
            align="center"
            color="black"
            scale="1 1 1"
            width="2.5"
          ></a-text>

          {/* 4️⃣ Expanded paragraph with more words */}
          <a-text 
            value="4️⃣ This is an even longer block of text meant to test how much readable information can be displayed in AR. It contains more data and should remain visible without losing clarity."
            position="0 0 0"
            align="center"
            color="black"
            scale="0.9 0.9 1"
            width="2.5"
          ></a-text>

          {/* 5️⃣ Large block of detailed information */}
          <a-text 
            value="5️⃣ This text block contains multiple sentences describing a detailed piece of information about the system. It is designed to test how much complex text can be read in AR before it becomes difficult to read due to size and distance limitations."
            position="0 -0.4 0"
            align="center"
            color="black"
            scale="0.8 0.8 1"
            width="2.5"
          ></a-text>

          {/* 6️⃣ Very dense text with maximum characters */}
          <a-text 
            value="6️⃣ This is the maximum amount of text that we can fit in an AR display while still attempting to keep it readable. If this text is unreadable, then we must shorten the data blocks and split them into multiple pages."
            position="0 -0.8 0"
            align="center"
            color="black"
            scale="0.7 0.7 1"
            width="2.5"
          ></a-text>

        </a-marker>
        
        {/* Camera */}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default App;
