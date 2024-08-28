import React from 'react';

const Input = ({ label, type, name, value, onChange, textArea }) => {

  if(textArea){ 
    return (
      <div className='inputForm'>
        <label>{label}<span style={{color: "red"}}>*</span></label>
        <textarea 
          className='textAreaInputForm'
          name={name} 
          value={value} 
          onChange={onChange} 
          
          style={{width: "100%", border: "1px solid lightgray", padding: "5px 10px", borderRadius: "1rem", color: "#45474B"}}
        />
      </div>
    )
  }
  else
  return (
    <div className='inputForm' style={{margin: "1rem 0px"}}>
      <label>{label}<span style={{color: "red"}}>*</span></label>
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        style={{color: "#45474B"}}
        className='input-form-input-field'
      />
    </div>
  );
};

export default Input;
