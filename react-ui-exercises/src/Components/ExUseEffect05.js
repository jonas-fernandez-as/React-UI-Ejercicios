import { useEffect, useState } from "react";
import "./ExUseEffect05.css";

let average = null;
let numbers = [];
let majors = [];
let total = null;
const initialForm = {
  num: "",
};

export default function ExUseEffect05() {
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    majors.length === 0
      ? (document.getElementById("msg").innerText = `No majors`)
      : (document.getElementById("msg").innerText = "");

    numbers.length === 20 ? setDisabled(true) : setDisabled(false);

    if (numbers.length === 20) {
      majors.map((el) => {
        return (average = average + parseInt(el));
      });
      total = average / majors.length;
      console.log(average);
      console.log(total);
      document.getElementById(
        "msg"
      ).innerText = `The age average of majors are: ${total.toFixed(
        0
      )} years old. And the quantity of majors are: ${majors.length} `;
    }
  }, [form]);

  const isMajor = (n) => {
    if (n >= 18) {
      majors.push(n);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isMajor(parseInt(form.num));
    numbers.push(parseInt(form.num));
    e.target.reset();
  };

  return (
    <div className="condUse-effect05">
      <h3>Exercise Five - useEffect</h3>
      <p>
        <i>
          Challenge: make a program that able you to put the age of twenty
          persons. And after returns the average of persons who are majors than
          18 years old .
        </i>
      </p>

      <h4>Average of majors persons</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="num">Insert number</label>
        <br />
        <input
          type="text"
          name="num"
          title="Only numbers"
          pattern="^[0-9.-]+$"
          required
          onChange={handleChange}
          disabled={disabled}
        />
        <br />
        <input type="submit" value="Send number" />
      </form>

      <h4 id="msg"></h4>
    </div>
  );
}
