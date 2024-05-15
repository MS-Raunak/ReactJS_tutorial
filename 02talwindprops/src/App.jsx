import "./App.css";
import Card from './Components/Card.jsx'
import Props from "./Components/Props.jsx";

function App() {
  const userInfo = {
     name : 'Raunak',
     age : 26,
     sex : 'Male'
  };
  return (
    <>
      <h1 className="bg-green-400 p4 rounded-xl">Props in React</h1>
      <Card username={"Priya"} btnUser={"Submit"}/>
      <Card btnUser={"Click Me"}/>
      <Props user = {userInfo}/>
    </>
  );
}

export default App;
