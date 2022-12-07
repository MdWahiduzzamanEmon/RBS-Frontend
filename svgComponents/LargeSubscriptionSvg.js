import React from "react";

const LargeSubscriptionSvg = ({ fill, stroke, ...props }) => {
  return (
    <svg
      width="100%"
      height={700}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#4FACF7">
        <circle r={199} cx={310} cy={258} />
        <circle r={87} cx={861} cy={8} />
        <circle r={138} cx={797} cy={429} />
      </g>
    </svg>
  );
};

export default LargeSubscriptionSvg;
