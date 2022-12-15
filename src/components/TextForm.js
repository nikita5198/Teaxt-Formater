import React, { useState } from "react";

export default function TextForm(props) {
     const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success")
     }
     const handleLwClick=()=>{
       setText(text.toLowerCase());
       props.showAlert("Converted to Lowercase","success")
     }
     const clear=()=>{
       setText("");
       props.showAlert("You cleared all text","success")
     }

     const handleOnChange=(event)=>{
        setText(event.target.value);
     }

     const handleExtraSpace=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("You removed extra spaces","success")
     }
    const [text,setText]=useState('');
     
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Enter text for analyze below</h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>Number of words : {text.split(" ").length}</p>
            <p>Number of characters : {text.length}</p>
            <p>Time for read this :{0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
