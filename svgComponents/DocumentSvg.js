import React from "react";

const DocumentSvg = ({ fill, stroke, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111.26 122.88"
      style={{
        enableBackground: "new 0 0 111.26 122.88",
      }}
      xmlSpace="preserve"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      {...rest}
    >
      <path d="M21.78 62.8c-1.61 0-2.91-1.43-2.91-3.19s1.3-3.19 2.91-3.19h24.91c1.61 0 2.91 1.43 2.91 3.19s-1.3 3.19-2.91 3.19H21.78zm71.59-43.46h10.43c2.05 0 3.92.84 5.27 2.19a7.447 7.447 0 0 1 2.19 5.27v88.62c0 2.06-.84 3.92-2.19 5.27a7.447 7.447 0 0 1-5.27 2.19H25.35c-2.05 0-3.92-.84-5.27-2.19a7.43 7.43 0 0 1-2.19-5.27v-11.88H7.46c-2.05 0-3.92-.84-5.27-2.19A7.447 7.447 0 0 1 0 96.08V7.46C0 5.4.84 3.54 2.19 2.19A7.43 7.43 0 0 1 7.46 0h78.45c2.05 0 3.92.84 5.27 2.19a7.447 7.447 0 0 1 2.19 5.27v11.88zm-69.09 84.2v11.88c0 .29.12.56.32.75.2.2.46.32.75.32h78.45c.29 0 .56-.12.75-.32.2-.2.32-.46.32-.75V26.8c0-.29-.12-.56-.32-.75-.2-.2-.46-.32-.75-.32H93.37v70.34c0 2.05-.84 3.92-2.19 5.27a7.447 7.447 0 0 1-5.27 2.19H24.28v.01zM85.91 6.39H7.46c-.29 0-.56.12-.75.32-.2.2-.32.46-.32.75v88.62c0 .29.12.56.32.75.2.2.46.32.75.32h78.45c.29 0 .56-.12.75-.32.2-.2.32-.46.32-.75V7.46c0-.29-.12-.56-.32-.75-.19-.2-.46-.32-.75-.32zM21.78 28.64c-1.61 0-2.91-1.43-2.91-3.19s1.3-3.19 2.91-3.19h49.81c1.61 0 2.91 1.43 2.91 3.19s-1.3 3.19-2.91 3.19H21.78zm0 17.08c-1.61 0-2.91-1.43-2.91-3.19s1.3-3.19 2.91-3.19h49.81c1.61 0 2.91 1.43 2.91 3.19s-1.3 3.19-2.91 3.19H21.78z" />
    </svg>
  );
};

export default DocumentSvg;
