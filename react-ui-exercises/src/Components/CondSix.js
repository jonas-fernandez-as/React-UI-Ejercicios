import "./CondSix.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number: " ",
};

let regExp = /^[0-9.\s-]+$/;

const CondSix = () => {
  const [form, setForm] = useState(initialState);
  const [res, setRes] = useState("");

  const pair = (num) => {
    let n1=parseInt(num)
    if (n1 <= 999) setRes(`Total: $${n1+0}`);
    if (n1 >= 1000 && n1 <=4999) setRes(`Total: $${n1-(n1*0.10)}`); 
    if(n1 >= 5000) setRes(`Total: $${n1-(n1*0.18)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pair(form.number);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="condSix-exercise">
        <h3>Exercise Six</h3>
        <p>
          <i>
            <b>Challenge:</b> make a program that you be able to put a total of
            sellings.
            </i>
            </p>
            <ul>
              <li>
            <b> If</b> total of buys of the client is minor of $1000 does not
            apply discount.
             </li>
             <li>
             <b> If </b> the total of buys are major than $1000 but minor
            to $5000 applys 10% of discount.
            </li>
            <li>
            <b> If </b> the total of buys are more than
            $5000 applys discount of 18% .Finally the program will show the total import with discount applied
            </li>
            </ul>
        
        <h4>Total sells</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Number</label>
          <br />
          <br />
          <input
            type="text"
            name="number"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number}
          />
          <br />
          <br />
          <input type="submit" value={"Check number"} />
        </form>
        {regExp.test(form.number) ? (
          <Message msg={res} bg={"transparent"} />
        ) : (
          <Message msg={"Only numbers"} bg={"#df4235"} />
        )}
      </div>
    </div>
  );
};

export default CondSix;
