import "./Cond15.css";
import { useReducer, useState } from "react";
import { TYPES } from "../actions/cond15Actions";
import { cond15Reducer, InitialState } from "../reducers/cond15Reducer";
import Message from "./Message";
import Cond15Table from "./Cond15table";
import Cond15Select from "./Cond15Select";


let initialSelect = {
  type:"",
  ram: "",
  pay:""
}

export default function Cond15() {
  const [selected, setSelected] = useState(initialSelect);
  const [state, dispatch] = useReducer(cond15Reducer, InitialState);

  const ram8 = (mod, pays) =>
    dispatch({ type: TYPES.RAM_8, payload: { mod, pays } });
  const ram16 = (mod, pays) =>
    dispatch({ type: TYPES.RAM_16, payload: { mod, pays } });
  const ram32 = (mod, pays) =>
    dispatch({ type: TYPES.RAM_32, payload: { mod, pays } });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let ram = selected.ram;
    let model = selected.type;
    let pay = selected.pay;

    if (ram === "8ram") {
      ram8(model, pay);
    }
    if (ram === "16ram") {
      ram16(model, pay);
    }
    if (ram === "32ram") {
      ram32(model, pay);
    }
  };

  return (
    <div className="condFifteen-exercise">
      <h3>Exercise Five - Reducer</h3>
      <p>
        <i>
          Challenge:A computer store sells Random acces memories with diferent
          settings. Make a program that you be able to select the type , model
          and paid method and render the total price.
        </i>
      </p>

      <Cond15Table />

      <h4>Types of RAM's with React reducer</h4>

      <form onSubmit={handleSubmit}>
        <Cond15Select handleChange={(e)=>{
          //console.log(e.target.name,e.target.value,selected)
          setSelected({...selected,[e.target.name]: e.target.value })
        }} />
        <input type="submit" value="Price" />
      </form>
      <Message msg={state.result} bg="transparent" />
    </div>
  );
}
