import React from "react";
import Square from "./components/Square/Square";


const App = () => {
  return(
      <div className="w3-content" style={{maxWidth: "1400px"}}>
          <Square color={"black"} size={"500px"}/>
          <Square color={"red"} size={"200px"}/>
      </div>
  )
}

export default App;