import React, { useState } from 'react'

export default function TextFrom(props) {

    const changeUpText = () => {
        textChange(text)
        var newText = text.toUpperCase()
        textChange(newText)
    }
    const changeLoText = () => {
        textChange(text)
        var newText = text.toLowerCase()
        textChange(newText)
    }
    const clearText = () => {
        textChange(text)
        let val=prompt(`If you wanted to clear the text then type "yes" `)
        if (val==="yes"){
            var newText = ''
            textChange(newText)
        }
        else{
            return
        }
    }
    const onChangeF = (e) => {
        textChange(e.target.value)
    }
    const [text, textChange] = useState("")
    return (
        <>

            <div className='container'>
                <div className="my-4 ">
                    <h1>{props.title}</h1>
                    <label htmlFor="myBox" className="form-label">Enter Your Text Below</label>
                    <textarea className="form-control" onChange={onChangeF} value={text} id="myBox" rows="3"></textarea>
                    <button className='btn btn-primary my-4 ' onClick={changeUpText}>Convert to UpperCase</button>
                    <button className='btn btn-success my-4 mx-3' onClick={changeLoText}>Convert to LowerCase</button>
                    <button className='btn btn-danger my-4 mx-3' onClick={clearText}>ClearText</button>
                </div>
            </div>
            <div className='container'>
                <h1 className="heading">Your Text Summary</h1>
                <p className="description">You have <b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Letters</p>
                <p>It takes about <b>{(text.split(" ").length * 0.008 * 60).toFixed(2)}</b> Seconds or <b>{(text.split(" ").length * 0.008).toFixed(2)}</b>Minutes  to read the particular Text</p>
                <h3>Preview :→</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
