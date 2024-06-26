import * as React from "react";

function Karma(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 13" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_845)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M15.88 4.86L14.74 6l1.14 1.14a.4.4 0 010 .57l-.57.57a.402.402 0 01-.57 0L13.6 7.14l-1.14 1.14a.403.403 0 01-.57 0l-.57-.57a.403.403 0 010-.57L12.46 6l-1.14-1.14a.403.403 0 010-.57l.57-.57a.403.403 0 01.57 0l1.14 1.14 1.14-1.14a.403.403 0 01.57 0l.57.57a.4.4 0 010 .57z"
        />
        <path d="M7.84 7.2h-.417a4.352 4.352 0 01-3.646 0H3.36A3.36 3.36 0 000 10.56v1.04a1.2 1.2 0 001.2 1.2H10a1.2 1.2 0 001.2-1.2v-1.04A3.361 3.361 0 007.84 7.2zM5.6 6.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_845">
          <path fill="#fff" d="M0 0h16v12.8H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoKarma = React.memo(Karma);
export default MemoKarma;
