import React, { useRef } from "react";
import { Camera } from "react-cam";

function capture(imgSrc) {
  console.log(imgSrc);
}
import React from "react";

const Scanner = () => {
  const cam = useRef(null);

  return (
    <div>
      {" "}
      <Camera
        showFocus={true}
        front={false}
        capture={capture}
        ref={cam}
        width="80%"
        height="auto"
        focusWidth="80%"
        focusHeight="60%"
        btnColor="white"
      />
      <button onClick={(img) => cam.current.capture(img)}>Take image</button>
    </div>
  );
};

export default Scanner;
