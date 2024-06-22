import * as React from "react";

function DecisionModels(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 16" fill="none" {...props}>
      <path
        d="M15.414 3.797L14 2.384a1.67 1.67 0 00-1.176-.484H6.092c-.44 0-.864.175-1.176.484L3.503 3.797H0v7.591h1.9a.946.946 0 00.947-.941h.27l2.512 2.268c.917.745 2.19.763 3.135.113.37.32.772.472 1.22.472.54 0 1.048-.22 1.449-.713.656.259 1.43.078 1.9-.498l.777-.96c.167-.204.27-.438.324-.682h1.719c.003.52.428.941.947.941H19V3.797h-3.586zM1.425 10.438a.476.476 0 01-.475-.475c0-.261.214-.475.475-.475s.475.214.475.475a.474.474 0 01-.475.475zm11.578-.205l-.775.956a.24.24 0 01-.335.036l-.71-.576-.89 1.084c-.178.216-.446.142-.535.07l-1.092-.934-.463.57c-.413.507-1.164.584-1.642.195L3.672 9.022H2.85V5.219h1.244L5.926 3.39l.169-.068h1.683L6.63 4.376a2.125 2.125 0 00-.13 3.007c.439.481 1.816 1.223 3.013.13l.243-.222 3.212 2.607c.101.083.116.234.036.335zm3.147-1.211h-2.054a1.66 1.66 0 00-.229-.229l-3.049-2.476.371-.338a.474.474 0 00.03-.67l-.324-.348a.477.477 0 00-.67-.03l-1.64 1.502c-.281.259-.762.28-1.027 0a.704.704 0 01.036-1.006l1.948-1.784c.22-.202.504-.312.801-.312l2.485-.006c.062 0 .122.024.163.068l1.832 1.829h1.327v3.8zm1.425 1.416a.476.476 0 01-.475-.475c0-.261.214-.475.475-.475s.475.214.475.475a.474.474 0 01-.475.475z"
        fill="#213F7D"
      />
    </svg>
  );
}

const MemoDecisionModels = React.memo(DecisionModels);
export default MemoDecisionModels;
