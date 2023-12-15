import { useState } from "react";

function App() {
  let [value, setValue] = useState(0)
  // let value = 15 ;
  const addValue = () => {
    while(value<=19){

      value = value + 1;
      setValue(value);
      break;
    }
  }
    // console.log(value);
    const removeValue = () =>{
      if(value===0){
        console.log("Zero will be the least value");
      }else{

        setValue(value-1)
      }
    }
  
  return (

    <div>
      <h1>Hello React {value}</h1>
      <button onClick={addValue}>Add Value {value}</button>
      <button onClick={removeValue}>Remove Value {value}</button>
    </div>
  )
}

export default App
