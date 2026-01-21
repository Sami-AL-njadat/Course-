import { useState } from "react";

export default function Myself() {
  const [num, setNum] = useState(1);

  return (
    <>
      <div
        style={{
          color: "white",
          background: "#12ba90",
          textAlign: "center",
          width: "50%",
          margin:"0 25% 0"
        }}
      >
        <div>Myself Component</div>

        <p>the numebr is a {num}</p>
        <button
          onClick={() => {
            setNum(num + 1);
            setNum((c) => c + 1);
          }}
        >
          Increase 2
        </button>
      </div>
    </>
  );
}
