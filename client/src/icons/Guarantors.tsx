import * as React from "react";

function Guarantors(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 13" fill="none" {...props}>
      <path
        opacity={0.4}
        d="M2.4 5.6a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zm12 .8h-1.6c-.423 0-.828.167-1.128.465A3.656 3.656 0 0113.55 9.6h1.65a.8.8 0 00.8-.8V8a1.601 1.601 0 00-1.6-1.6zm-12.8 0A1.602 1.602 0 000 8v.8a.8.8 0 00.8.8h1.647a3.666 3.666 0 011.88-2.735A1.595 1.595 0 003.2 6.4H1.6zm12-.8a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
        fill="#213F7D"
      />
      <path
        d="M9.92 7.2h-.208A3.938 3.938 0 018 7.6c-.615 0-1.19-.15-1.713-.4H6.08a2.88 2.88 0 00-2.88 2.88v.72A1.2 1.2 0 004.4 12h7.2a1.2 1.2 0 001.2-1.2v-.72A2.88 2.88 0 009.92 7.2zM8 6.4A2.8 2.8 0 108 .8a2.8 2.8 0 000 5.6z"
        fill="#213F7D"
      />
    </svg>
  );
}

const MemoGuarantors = React.memo(Guarantors);
export default MemoGuarantors;
