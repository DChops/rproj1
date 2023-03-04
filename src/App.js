import './App.css';
import { Disp } from './Disp';

function App() {
  const planets = [
    {name:"Earth", isGas:false},
    {name:"Mars", isGas:false},
    {name:"Jupyter", isGas:true},
    {name:"Saturn", isGas:true},
    {name:"Neptune", isGas:true},
    {name:"Uranus", isGas:true},
    {name:"Venus", isGas:false}
  ];
  return (
  <div className="App">
    {planets.map((planet,key) => {
      return <Disp keys={key} name={planet.name} isGas={planet.isGas} />;
    })}
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
