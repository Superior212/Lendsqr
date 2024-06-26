import * as React from "react";

function Home(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 15" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_635)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M9.333 12.877v-2.655a.444.444 0 00-.444-.444H7.11a.444.444 0 00-.444.444v2.659a.444.444 0 01-.443.444l-3.113.008a.444.444 0 01-.444-.444V8.335l5.122-4.218a.339.339 0 01.425 0l5.12 4.216v4.556a.444.444 0 01-.445.444l-3.111-.008a.445.445 0 01-.445-.447z"
        />
        <path d="M15.925 7.454l-.708.861a.334.334 0 01-.47.046L8.215 2.978a.339.339 0 00-.425 0L1.255 8.361a.333.333 0 01-.47-.046l-.708-.86a.333.333 0 01.045-.47l7.03-5.79a1.333 1.333 0 011.695 0l2.486 2.044V1.222a.333.333 0 01.334-.333h1.555a.333.333 0 01.334.333V5.07l2.322 1.914a.334.334 0 01.047.47z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_635">
          <path fill="#fff" d="M0 0h16v14.222H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoHome = React.memo(Home);
export default MemoHome;
