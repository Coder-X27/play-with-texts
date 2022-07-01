import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type,code)=>{
    setAlert({
      message:message,
      type:type,
      code:code
    })
    setTimeout(() => {
      setAlert('null')
    }, 2000);
  }
  
  const toggleMode = () => {
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor="#212529"
      document.body.style.color="white"
      showAlert("Dark mode has been Enabled","info","success : ")
    }
    
    else {
      setmode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="#212529"
      showAlert("Light mode has been Enabled","success","success : ")
    }
  }
  return (
    <>
      {/* <Router>
        <Navbar title='PlayWithTexts' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextFrom showAlert={showAlert} title='Enter your text to Analyze' mode={mode} />}/>
          <Route exact path="/about" element={<About />}/>
        </Routes>
      </Router> */}
        <Navbar title='PlayWithTexts' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextFrom showAlert={showAlert} title='Enter your text to Analyze' mode={mode} />
    </>
  );
}

export default App;
