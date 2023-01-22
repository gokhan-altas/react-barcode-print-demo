import ReactPrint from "react-to-print";
import { useRef } from "react";

function PrintBarcode() {
  const ref = useRef();

  return (
    <div>
      <div ref={ref}>
        <img src="https://contents.mediadecathlon.com/p2360179/k$6cce8ecc1f1d083e8ddaade9b2d10431/sq/erkek-polar-mont-sh100-x-warm.jpg?f=300x300" />
      </div>

      <ReactPrint
        trigger={() => <button>Print</button>}
        content={() => ref.current}
      />
    </div>
  );
}

export default PrintBarcode;
