import * as React from "react";

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 13" fill="#213F7D" {...props}>
      <path
        opacity={0.4}
        d="M12 6.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm1.2.8h-.095c-.348.12-.715.2-1.105.2s-.758-.08-1.105-.2H10.8c-.51 0-.98.148-1.393.385.61.658.993 1.53.993 2.495v.96c0 .055-.013.108-.015.16H14.8A1.2 1.2 0 0016 10a2.8 2.8 0 00-2.8-2.8z"
        fill="#213F7D"
      />
      <path
        d="M4.8 6.4a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6zm1.92.8h-.207a3.938 3.938 0 01-1.713.4c-.615 0-1.19-.15-1.712-.4H2.88A2.88 2.88 0 000 10.08v.72A1.2 1.2 0 001.2 12h7.2a1.2 1.2 0 001.2-1.2v-.72A2.88 2.88 0 006.72 7.2z"
        fill="#213F7D"
      />
    </svg>
  );
}

const MemoUser = React.memo(User);
export default MemoUser;
