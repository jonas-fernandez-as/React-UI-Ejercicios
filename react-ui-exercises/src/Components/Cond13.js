import "./Cond13.css";
import { useReducer, useState } from "react";
import { TYPES } from "../actions/cond13Actions";
import { cond13Reducer, InitialState } from "../reducers/cond13Reducer";
import Message from "./Message";

let regExp = /^[0-9.\s-]+$/;

const initialForm = {
  qualification1: 0,
  qualification2: 0,
};

export default function Cond13() {
  const [state, dispatch] = useReducer(cond13Reducer, InitialState);
  const [form, setForm] = useState(initialForm);

  const directAprobation = () =>
    dispatch({ type: TYPES.DIRECT_APROBATION});
  const takeFinalExam = () =>
    dispatch({ type: TYPES.TAKE_FINAL_EXAM });
  const reprobateMustAppeal = () =>
    dispatch({ type: TYPES.REPROBATE_MUST_APPEAL });

    const minor0 = () =>
    dispatch({ type: TYPES.MINOR_0 });

    const major10 = () =>
    dispatch({ type: TYPES.MAJOR_10 });


  const handleSubmit = (e) => {
    let n1 = form.qualification1;
    let n2 = form.qualification2;
    e.preventDefault();
    if (n1 >= 8 && n2 >= 8) {
      directAprobation();
    }
    if (
      (n1 >= 6 && n1 < 8) || (n2 >= 6 && n2 < 8) 
      
    ) {
      takeFinalExam();
    }
    if (n1 < 6 || n2 < 6) {
      reprobateMustAppeal();
    }
    if(n1<0 || n2<0){
      minor0()
    }
    if(n1>10 || n2>10){
     major10()
    }

  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="condThirteen-exercise">
      <form onSubmit={handleSubmit}>
        <label htmlFor="qualification1">Qualification one</label>
        <br />
        <br />
        <input
          type="text"
          name="qualification1"
          required
          placeholder="Insert first qualification"
          title="Only numbers"
          value={form.qualification1}
          pattern="^[0-9.\s-]+$"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="qualification2">Qualification two</label>
        <br />
        <br />
        <input
          type="text"
          name="qualification2"
          required
          placeholder="Insert first qualification"
          title="Only numbers"
          value={form.qualification2}
          pattern="^[0-9.\s-]+$"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Average"></input>
      </form>
      {regExp.test(form.qualification1) && regExp.test(form.qualification1) ? (
        <Message msg={state.average} bg={"transparent"} />
      ) : (
        <Message msg={"Only numbers"} bg={"transparent"} />
      )}
    </div>
  );
}
