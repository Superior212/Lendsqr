import * as React from "react";

function FeesandPricing(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_670)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M16 8a2.75 2.75 0 00-1.784-2.575 2.75 2.75 0 00-3.641-3.64 2.75 2.75 0 00-5.15 0 2.75 2.75 0 00-3.64 3.64 2.75 2.75 0 000 5.15 2.75 2.75 0 003.64 3.64 2.75 2.75 0 005.15 0 2.75 2.75 0 003.64-3.64A2.75 2.75 0 0016 8zM6 5a1 1 0 110 2 1 1 0 010-2zm.384 5.677a.5.5 0 01-.707 0l-.354-.354a.5.5 0 010-.707l4.293-4.293a.5.5 0 01.707 0l.354.354a.5.5 0 010 .707l-4.293 4.293zM10 11a1 1 0 110-2 1 1 0 010 2z"
        />
        <path d="M6 5a1 1 0 110 2 1 1 0 010-2zm.384 5.677a.502.502 0 01-.707 0l-.354-.354a.5.5 0 010-.707l4.293-4.293a.5.5 0 01.707 0l.354.354a.502.502 0 010 .707l-4.293 4.293zM10 11a1 1 0 110-2 1 1 0 010 2z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_670">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoFeesandPricing = React.memo(FeesandPricing);
export default MemoFeesandPricing;
