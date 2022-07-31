import "./CondNine.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number1: " ",
  number2: " ",
  number3: " ",
  number4: " ",
};

let regExp = /^[0-9.\s-]+$/;

const CondNine = () => {
  const [form, setForm] = useState(initialState);
  const [count, setCount] = useState(0);
  const [major, setMajor] = useState([]);

  const majors = (num1, num2, num3, num4) => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let n3 = parseInt(num3);
    let n4 = parseInt(num4);
    let contado = 0;
    let moreThan100 = [];
    if (n1 > 100) {
      contado += 1;
      moreThan100.push(n1);
    }
    if (n2 > 100) {
      contado += 1;
      moreThan100.push(n2);
    }
    if (n3 > 100) {
      contado += 1;
      moreThan100.push(n3);
    }
    if (n4 > 100) {
      contado += 1;
      moreThan100.push(n4);
    }
    let maio = moreThan100.map((el) => `${el}`).join("-");
    setCount(contado);
    setMajor(maio);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    majors(form.number1, form.number2, form.number3, form.number4);
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
        <h3>Exercise nine</h3>
        <p>
          <i>
            <b>Challenge:</b> make a program that you be able to put four
            numbers and after return wich of them and how many are majors than 100
          </i>
        </p>

        <h4>Majors than 100 on React</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number1">Number one</label>
          <br />
          <br />
          <input
            type="text"
            name="number1"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number1}
          />
          <br />
          <br />
          <label htmlFor="number2">Number two</label>
          <br />
          <br />
          <input
            type="text"
            name="number2"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number2}
          />
          <br />
          <br />
          <label htmlFor="number3">Number three</label>
          <br />
          <br />
          <input
            type="text"
            name="number3"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number3}
          />
          <br />
          <br />
          <label htmlFor="number4">Number four</label>
          <br />
          <br />
          <input
            type="text"
            name="number4"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number4}
          />
          <br />
          <br />
          <input type="submit" value={"Check number"} />
        </form>
        {regExp.test(form.number1) &&
        regExp.test(form.number2) &&
        regExp.test(form.number3) &&
        regExp.test(form.number4) ? major.length===0?(
          <Message
            msg={`No numbers major than 100`}
            bg={"transparent"}
          />
        ) : (<Message
          msg={`Are ${count} number/s major/s than 100 and they are : ${major}`}
          bg={"transparent"}
        />
          
          ):(<Message msg={"Only numbers"} bg={"#df4235"} />)}
      </div>
    </div>
  );
};

export default CondNine;
