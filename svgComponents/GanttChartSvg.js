import React from "react";

const GanttChartSvg = ({ fill, stroke, ...rest }) => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 98.41 122.88"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      {...rest}
    >
      <title>{"report"}</title>
      <path d="M83.64 122.88H6.89A6.89 6.89 0 0 1 0 116V6.85A6.82 6.82 0 0 1 2 2a6.79 6.79 0 0 1 4.87-2h84.65a6.9 6.9 0 0 1 6.89 6.89v115.96Zm8.84-5.88V6.89a1 1 0 0 0-.28-.68 1 1 0 0 0-.68-.29H6.89a.94.94 0 0 0-1 1V116a1 1 0 0 0 .28.67 1 1 0 0 0 .69.29h85.62ZM19 104v-6.14h36.1V104H19Zm0-16.47v-6.14h55.36v6.13L19 87.57ZM74.31 64v6.11h-8.69V64Zm-15.54-5.43v11.49h-8.69V58.57ZM43.24 42.11v28h-8.69v-28ZM27.7 30.59v39.47H19V30.59Zm41.44.27 14.06.05a14.13 14.13 0 0 1-4.19 10A14.33 14.33 0 0 1 77 42.55l-7.86-11.69Zm-1.44-2.79-.76-15a.54.54 0 0 1 .52-.56c3.91-.4 8.48 1.48 11.34 4.1a15.62 15.62 0 0 1 5 10.39.54.54 0 0 1-.5.57l-15 1.08a.54.54 0 0 1-.57-.5ZM69.29 27l12.35-1.14c-.9-6.61-5.85-11.38-13-11.92L69.29 27ZM66 30.21l7.54 13a15.07 15.07 0 1 1-9.73-28l2.19 15Z" />
    </svg>
  );
};

export default GanttChartSvg;
