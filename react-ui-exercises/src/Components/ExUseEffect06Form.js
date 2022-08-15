export const ExUseEffect06Form = ({disabled,text,name,handleSubmit,handleChange})=>{
 return(
 <form onSubmit={handleSubmit}>
        <label htmlFor={name}>{text}</label>
        <br />
        <input
          type="text"
          name={name}
          title="Only numbers"
          pattern="^[0-9.-]+$"
          required
          onChange={handleChange}
          disabled={disabled}
        />
        <br />
        <input disabled={disabled} type="submit" value="Send number" />
       </form>
 )
}