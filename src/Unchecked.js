import React from "react";

function SvgUnchecked(props) {
  return (
    <svg width="21px" height="20px" viewBox="0 0 21 20" {...props}>
      <title>{"unchecked"}</title>
      <desc>{"Created with Sketch."}</desc>
      <defs>
        <radialGradient
          cx="50%"
          cy="0%"
          fx="50%"
          fy="0%"
          r="100%"
          id="uncheckedGrad"
        >
          <stop stopColor="#560000" offset="0%" />
          <stop stopColor="#000000" offset="100%" />
        </radialGradient>
      </defs>
      <g
        id="unchecked"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          stroke="#6E6E6E"
          fill="url(#uncheckedGrad)"
          x={1}
          y={1}
          width={17}
          height={17}
          rx={7}
        />
        <polygon
          id="Path"
          fill="#000000"
          points="5.08989102 6.90535678 3 8.73062368 8.6264031 14 17 7.46207507 14.3711069 5 8.51581624 10.1138879"
        />
      </g>
    </svg>
  );
}

export default SvgUnchecked;
