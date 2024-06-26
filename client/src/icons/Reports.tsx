import * as React from "react";

function Reports(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        opacity={0.4}
        d="M16 12.5v1a.5.5 0 01-.5.5H1a1 1 0 01-1-1V2.5A.5.5 0 01.5 2h1a.5.5 0 01.5.5V12h13.5a.5.5 0 01.5.5z"
        fill="#213F7D"
      />
      <path
        d="M8.6 3H7.4c-.2 0-.4.2-.4.4v6.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V3.4c0-.2-.2-.4-.4-.4zm-3 4H4.4c-.2 0-.4.2-.4.4v2.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V7.4c0-.2-.2-.4-.4-.4zm9-5h-1.2c-.2 0-.4.2-.4.4v7.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V2.4c0-.2-.2-.4-.4-.4zm-3 3h-1.2c-.2 0-.4.2-.4.4v4.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V5.4c0-.2-.2-.4-.4-.4z"
        fill="#213F7D"
      />
    </svg>
  );
}

const MemoReports = React.memo(Reports);
export default MemoReports;
