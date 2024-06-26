import * as React from "react";

function AuditLogs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 22" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_680)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M14 2.667h-3.333a2.667 2.667 0 012.666 2.666H2.667a2.667 2.667 0 012.666-2.666H2a2 2 0 00-2 2v14.666a2 2 0 002 2h12a2 2 0 002-2V4.667a2 2 0 00-2-2zm-10 15a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zM13.333 17a.333.333 0 01-.333.333H7A.333.333 0 016.667 17v-.667A.333.333 0 017 16h6a.333.333 0 01.333.333V17zm0-4a.333.333 0 01-.333.333H7A.333.333 0 016.667 13v-.667A.333.333 0 017 12h6a.333.333 0 01.333.333V13zm0-4a.333.333 0 01-.333.333H7A.333.333 0 016.667 9v-.667A.333.333 0 017 8h6a.333.333 0 01.333.333V9z"
        />
        <path d="M4 15.667a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2 1 1 0 000-2zm6.667-5a2.667 2.667 0 10-5.334 0 2.667 2.667 0 00-2.666 2.666h10.666a2.667 2.667 0 00-2.666-2.666zM8 3.667a1 1 0 110-2 1 1 0 010 2z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_680">
          <path fill="#fff" d="M0 0h16v21.333H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoAuditLogs = React.memo(AuditLogs);
export default MemoAuditLogs;
