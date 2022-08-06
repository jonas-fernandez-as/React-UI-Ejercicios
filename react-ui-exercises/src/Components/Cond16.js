import "./Cond16.css";
import { useReducer, useState } from "react";
import { TYPES } from "../actions/cond16Actions";
import { cond16Reducer, InitialState } from "../reducers/cond16Reducer";
import Message from "./Message";

let initialNumbers = {
  number1: 0,
  number2: 0,
  number3: 0,
};

export default function Cond16() {
  const [form, setForm] = useState(initialNumbers);
  const [state, dispatch] = useReducer(cond16Reducer, InitialState);
  
  const organize = (n1, n2, n3) =>
    dispatch({ type: TYPES.ORGANIZE, payload: { n1, n2, n3 } });
  const sameNumbers = (n1, n2, n3) =>
    dispatch({ type: TYPES.SAME_NUMBERS, payload: { n1, n2, n3 } });
  const operation = (n1, n2, n3) =>
    dispatch({ type: TYPES.OPERATION, payload: { n1, n2, n3 } });
   

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
  };
  
  const handleSubmit = (e) => {
    
    
    let num1= parseInt(form.number1)
    let num2= parseInt(form.number2)
    let num3= parseInt(form.number3)
    
    e.preventDefault();
    organize(num1,num2,num3);
    sameNumbers(num1,num2,num3);
    operation(num1,num2,num3);

    e.target.reset();
    
  };
  
  
  return (
    <div className="condSixteen-exercise">
      <h3>Exercise Six - Reducer</h3>
      <p>
        <i>
          THIS EXERCISE MUST BE FIXED
         Challenge: make a program that you be able to put three numbers and return:
        </i>
      </p>
      <ul>
        <li>The three numbers organized from minor to major</li>
        <li>A message telling if the addition of first and second number are major or minor than multiplication of second and third number </li>
        <li>A message telling if the numbers are the same or diferent</li>
      </ul>

      <h4>Organize numbers with React reducer</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="number1">First number</label>
        <br />
        <br />
        <input
          type="text"
          name="number1"
          required
          pattern="^[0-9.-]+$"
          value={form.number1}
          title="Please only numbers"
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="number2">Second number</label>
        <br />
        <br />
        <input
          type="text"
          name="number2"
          required
          pattern="^[0-9.-]+$"
          value={form.number2}
          title="Please only numbers"
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="number3">Third number</label>
        <br />
        <br />
        <input
          type="text"
          name="number3"
          required
          pattern="^[0-9.-]+$"
          value={form.number3}
          title="Please only numbers"
          onChange={handleChange}
        />
        <br />
        <br />

        <input type="submit" value="Organize" />
     
      </form>

      

      {state?(<Message msg={state.order} bg="transparent"/>):("")}<br/>
      {state?(<Message msg={state.operation} bg="transparent"/>):("")}<br/>
      {state?(<Message msg={state.same} bg="transparent"/>):("")}<br/>
      

     
      
    </div>
  );
}

