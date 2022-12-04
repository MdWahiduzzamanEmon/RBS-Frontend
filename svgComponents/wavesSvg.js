import React from "react";

const WavesSvg = ({ fill, stroke, ...props }) => {
  return (
    <div>
      <svg
        width="100%"
        height={800}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="m0 450 33.3-46.3c33.4-46.4 100-139 166.7-109.5 66.7 29.5 133.3 181.1 200 180.3 66.7-.8 133.3-154.2 200-157.8C666.7 313 733.3 459 800 491.5c66.7 32.5 133.3-48.5 200-96.8 66.7-48.4 133.3-64 200-38.7 66.7 25.3 133.3 91.7 166.7 124.8L1400 514V0H0Z"
          fill="#173465"
        />
      </svg>
    </div>
  );
};

export default WavesSvg;
