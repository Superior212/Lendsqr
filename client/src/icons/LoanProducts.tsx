import * as React from "react";

function LoanProducts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 22" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_772)">
        <path
          d="M17.625 12.781L12.9 16.562a2.002 2.002 0 01-1.25.438H.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h1.731l1.453-1.178A3.677 3.677 0 016 11h5a.999.999 0 01.988 1.169c-.082.49-.544.831-1.041.831H8.5a.5.5 0 000 1h3.697a1.99 1.99 0 001.25-.438l2.887-2.309c.388-.312.963-.334 1.332 0a1 1 0 01-.041 1.528z"
          fill="#213F7D"
        />
      </g>
      <g clipPath="url(#prefix__clip1_97297_772)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M7.75 1.875h2.5l.926-1.39a.312.312 0 00-.26-.485H7.085a.313.313 0 00-.26.486l.925 1.389zm2.5.625h-2.5C3.797 4.754 4.002 7.747 4.002 8.125 4.002 9.16 4.96 10 6.144 10h5.713c1.183 0 2.142-.84 2.142-1.875 0-.371.182-3.384-3.749-5.625z"
        />
        <path d="M10.582 2.031v.313a.156.156 0 01-.156.156H7.574a.156.156 0 01-.156-.156V2.03a.156.156 0 01.156-.156h2.852a.156.156 0 01.156.156zM7.672 7.627V6.213h-.547v-.429h.547V4.375h.774l.768 1.41h.523v-1.41h.591v1.41h.547v.428h-.547v1.414h-.774l-.778-1.414h-.513v1.414h-.591zm.591-1.887v.044h.276l-.286-.576H8.25l.014.532zm1.484 1.07h.01l-.02-.513v-.084h-.291l.02.03.28.566z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_772">
          <path fill="#fff" transform="translate(0 6)" d="M0 0h18v16H0z" />
        </clipPath>
        <clipPath id="prefix__clip1_97297_772">
          <path fill="#fff" transform="translate(4)" d="M0 0h10v10H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoLoanProducts = React.memo(LoanProducts);
export default MemoLoanProducts;
