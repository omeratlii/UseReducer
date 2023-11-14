import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const numberContext = useContext(NumberContext);
  return (
    <>
      <div className="numberDiv">Sayı = {numberContext.count}</div>
      <button className="actionButton" onClick={() => numberContext.dispatch("increment")}>
        Arttır
      </button>
      <button className="actionButton" onClick={() => numberContext.dispatch("decrement")}>
        Azalt
      </button>
      <button className="actionButton" onClick={() => numberContext.dispatch("reset")}>
        Sıfırla
      </button>
    </>
  );
}

export default Calculate;
