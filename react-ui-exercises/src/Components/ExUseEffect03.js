import { useEffect, useState } from "react";
import "./ExUseEffect03.css";

export default function ExUseEffect03() {
  const [count, setCount] = useState(0);
  const [count5, setCount5] = useState(0);

  useEffect(() => {
    document.getElementById("msg5").innerText = `${count5}`;

    if (count5 === 100) {
      document.getElementById("contador+5").classList.add("visible");
      document.getElementById("contador-5").classList.remove("visible");
    } else if (count5 === 0) {
      document.getElementById("contador-5").classList.add("visible");
      document.getElementById("contador+5").classList.remove("visible");
    }
  }, [count5]);

  useEffect(() => {
    console.log(count);

    document.getElementById("msg").innerText = `${count}`;

    if (count === 10) {
      document.getElementById("contador+").classList.add("visible");
      document.getElementById("contador-").classList.remove("visible");
    } else if (count === 0) {
      document.getElementById("contador-").classList.add("visible");
      document.getElementById("contador+").classList.remove("visible");
    }
  }, [count]);

  return (
    <div className="condUse-effect03">
      <h3>Exercise Three - useEffect</h3>
      <p>
        <i>
          Challenge: make a program and show on window numbers one to ten and
          ten to one. And show too numbers since 0 to 100 and since 100 to 0
          jumping five on five (example: 0,5,10,15..)
        </i>
      </p>

      <h4>Count positive numbers with useEffect</h4>

      <input
        value="Count + 1"
        id="contador+"
        type="button"
        onClick={(e) => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
      />
      <br />

      <input
        value="Count -  1"
        id="contador-"
        type="button"
        onClick={(e) => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      />

      <h4 id="msg"></h4>

      <input
        value="Count + 5"
        id="contador+5"
        type="button"
        onClick={(e) => {
          if (count5 < 100) {
            setCount5(count5 + 5);
          }
        }}
      />
      <br />

      <input
        value="Count -  5"
        id="contador-5"
        type="button"
        onClick={(e) => {
          if (count5 > 0) {
            setCount5(count5 - 5);
          }
        }}
      />

      <h4 id="msg5"></h4>
    </div>
  );
}
