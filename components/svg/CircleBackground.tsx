export default function CircleBackground() {
  return (
    <svg viewBox="0 0 322 517" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1_172)">
        <circle
          cx="314.5"
          cy="202.5"
          r="314.5"
          fill="url(#paint0_radial_1_172)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_172"
          x="0"
          y="-272"
          width="789"
          height="789"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="10"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_172"
          />
          <feOffset dx="100" dy="-100" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.45098 0 0 0 0 0.737255 0 0 0 0 0.905882 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_172"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_172"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1_172"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(416.108 229.112) rotate(-156.708) scale(388.499)"
        >
          <stop stopColor="#73BCE7" stopOpacity="0.8" />
          <stop offset="1" stopColor="#C2EDFD" stopOpacity="0.5" />
        </radialGradient>
      </defs>
    </svg>
  );
}
