import * as React from "react";

function StarLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_5530_1562)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.984.96a.321.321 0 00-.288.22L6.089 6H.945a.321.321 0 00-.19.577l4.18 3.057-1.607 4.987a.32.32 0 00.493.357L8 11.922l4.179 3.056a.32.32 0 00.493-.357l-1.606-4.988 4.178-3.056v.001a.321.321 0 00-.189-.577H9.911L8.304 1.18a.32.32 0 00-.32-.221zM8 2.294L9.376 6.42c.042.132.165.221.304.22h4.394l-3.575 2.615a.32.32 0 00-.116.358l1.376 4.268-3.57-2.61a.319.319 0 00-.378 0l-3.57 2.61 1.376-4.268a.32.32 0 00-.116-.357L1.926 6.64H6.32a.319.319 0 00.304-.22L8 2.294z"
          fill="#E9B200"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_5530_1562">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoStarLight = React.memo(StarLight);
export default MemoStarLight;
