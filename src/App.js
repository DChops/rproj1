import './App.css';
import {useState} from "react";

function App() {
  const [num,setNum] = useState(0);
  
  return (
  <div className="App">
   <button onClick={() => { setNum(num+1) }}>Increase</button>
   <button onClick={() => { setNum(num-1) }}>Decrease</button>
   <button onClick={()=>{setNum(0)}}>SetZero</button>
   <br></br>
   {num}
  </div>
  );
}

// const Job = (props) => {
//   return (
//     <div>
//       <h1 className='Big'>{props.company}</h1>
//       <h1>{props.salary}</h1>
//       <h1>{props.description}</h1>
//     </div>
//   );
// }

export default App;
