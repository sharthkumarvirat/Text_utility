import React, { useState } from 'react'


export default function TextArea(props) {

  const [text, settext] = useState("");

  const handleonchange = (event) => {
    // console.log(event);
    settext(event.target.value);
  } //to handle event value{text} we use onChange event lisnner

  const convertupcase = () => {
    // console.log("convert uperrcase  "+text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("converted into upper case","success");
  }
  const converttocase = () => {
    // console.log("convert lowercase  "+text);
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("converted into lower case","success");  
  }
  const clear = () => {
    // console.log("convert lowercase  "+text);
    let newtext = '';
    settext(newtext);
    props.showAlert("text is cleared","success"); 
  }
  const copy = () => {
    // console.log("convert lowercase  "+text);
    let text = document.getElementById("Textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <>
      <div className='cont' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3 b-5">
          <textarea className="form-control" value={text} onChange={handleonchange} style={{
            backgroundColor: props.mode === 'light' ? 'snow' : '#6e8ca3',
            color: props.mode === 'light' ? 'black' : 'light'
          }} id="Textbox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={convertupcase}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={converttocase}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={clear}>Clear</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1 " onClick={copy}>Copy text</button>


      </div>

      <div className="contain" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Your text summary</h1>
        <h5 className='text-info'>{text.split(" ").length} word counter {text.length} letter counter</h5>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

