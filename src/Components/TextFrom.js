import React, { useState } from 'react'

export default function TextFrom(props) {

    const changeUpText = () => {
        textChange(text)
        var newText = text.toUpperCase()
        textChange(newText)
        props.showAlert("Converted to UpperCase !","primary","success : ")
    }
    const changeLoText = () => {
        textChange(text)
        var newText = text.toLowerCase()
        textChange(newText)
        props.showAlert("Converted to LowerCase !","success","success : ")
    }
    const copyText = () => {
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied to Clipboard !","warning","success : ")
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        textChange(newText.join(' '))
        props.showAlert("Extra Spaces has been removed From the text !","secondary","success : ")
    }
    const clearText = () => {
        textChange(text)
        let val = prompt(`If you wanted to clear the text then type "yes" `)
        if (val === "yes") {
            var newText = ''
            textChange(newText)
            props.showAlert("Cleared the textarea !","danger","success : ")
        }
        else {
            return
        }
    }
    const onChangeF = (e) => {
        textChange(e.target.value)
    }
    const [text, textChange] = useState("")
    return (
        <>
            <div className='container ' >
                <div className="my-4 ">
                    <h3>{props.title}</h3>
                    <label htmlFor="myBox" className="form-label">Enter Your Text Below</label>
                    <textarea className="form-control" onChange={onChangeF} value={text} style={{backgroundColor:props.mode==='light'?"white":"#33383e",color:props.mode==='light'?"black":"white"}} id="myBox" rows="3"></textarea>
                    <button disabled={text.length===0} className='btn btn-outline-primary my-4 ' onClick={changeUpText}>Convert to UpperCase</button>
                    <button disabled={text.length===0} className='btn btn-outline-success my-4 mx-3' onClick={changeLoText}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className='btn btn-outline-danger my-4 mx-3' onClick={clearText}>ClearText</button>
                    <button disabled={text.length===0} className='btn btn-outline-warning my-4 mx-3' onClick={copyText}>Copy To clipBoard</button>
                    <button disabled={text.length===0} className='btn btn-outline-secondary my-4 mx-3' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className='container'>
                <h3 className="heading">Your Text Summary</h3>
                <p className="description">You have <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> Letters</p>
                <p>It takes about <b>{(text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008 * 60).toFixed(2)}</b> Seconds or <b>{(text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008).toFixed(2)}</b>Minutes  to read the particular Text</p>
                <h3>Preview :→</h3>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
