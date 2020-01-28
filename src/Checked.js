import React, {useState} from "react";

function SvgChecked(props) {
  const [opacity, setOpacity] = useState(0.5);

  return (
    <svg width="21px" height="20px" viewBox="0 0 21 20" {...props}
         onMouseLeave={() => setOpacity(0.5)}
         onMouseEnter={() => setOpacity(1)}>
      <title>{"checked"}</title>
      <desc>{"Created with Sketch."}</desc>
      <defs>
        <radialGradient
          cx="50%"
          cy="0%"
          fx="50%"
          fy="0%"
          r="100%"
          id="checkedGradient"
        >
          <stop stopColor="#0279C0" offset="0%" />
          <stop stopColor="#123448" offset="100%" />
        </radialGradient>
      </defs>
      <g
        id="checked"
        stroke="none"
        strokeWidth={0}
        fill="none"
        fillRule="evenodd"
        opacity={opacity}
      >
        <rect
          id="Rectangle"
          stroke="#6E6E6E"
          fill="url(#checkedGradient)"
          x={1}
          y={1}
          width={17}
          height={17}
          rx={7}
        />
        <polygon
          id="Path"
          fill="#D8D8D8"
          points="5.08989102 6.90535678 3 8.73062368 8.6264031 14 17 7.46207507 14.3711069 5 8.51581624 10.1138879"
        />
      </g>
    </svg>
  );
}

export default SvgChecked;
