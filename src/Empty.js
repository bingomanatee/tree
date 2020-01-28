import React from "react";

function SvgEmpty(props) {
  return (
    <svg width="21px" height="20px" viewBox="0 0 21 20" {...props}>
      <title>{"empty"}</title>
      <desc>{"Created with Sketch."}</desc>
      <g
        id="empty"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <circle id="Oval" fill="#6E6E6E" cx={10} cy={10} r={3} />
      </g>
    </svg>
  );
}

export default SvgEmpty;
