import React from "react";

function SvgAdd(props) {
  return (
    <svg width="21px" height="20px" viewBox="0 0 21 20" {...props}>
      <title>{"add"}</title>
      <desc>{"Created with Sketch."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="#B4EC51" offset="0%" />
          <stop stopColor="#429321" offset="100%" />
        </linearGradient>
      </defs>
      <g id="add" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path
          d="M11,4 L11,8 L15,8 L15,10 L11,10 L11,14 L9,14 L9,10 L5,10 L5,8 L9,8 L9,4 L11,4 Z"
          id="Combined-Shape"
          fill="url(#linearGradient-1)"
        />
      </g>
    </svg>
  );
}

export default SvgAdd;
