import logo from "./logo.svg";
import "./App.css";

function App() {
  const professionals = ["Karim", "Rahim", "Hafiz", "Sakib"];
  const professions = [
    { name: "Karim", job: "Teacher" },
    { name: "Rahim", job: "Doctor" },
    { name: "Hafiz", job: "Engineer" },
    { name: "Sakib", job: "Engineer" },
  ];
  return (
    <div className="App">
      <ul>
        {professionals.map((prof) => (
          <li>{prof}</li>
        ))}
      </ul>
      {/* <Profession name="Ayan" job="Doctor"></Profession> */}
      {professions.map((profession) => (
        <Profession name={profession.name} job={profession.job}></Profession>
      ))}
    </div>
  );
}

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: "skyblue",
    border: "3px solid lightsalmon",
    margin: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Profession: {props.job}</h4>
    </div>
  );
}

function Profession(props) {
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h2>Professions: {props.job}</h2>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}
export default App;

/*    
      <Friend phone="01700" address="New York"></Friend>
      <Friend phone="01500" address="Syndey"></Friend>
      <Friend phone="01800" address="London"></Friend>
      
      <Person name="Karim" job="Teacher"></Person>
      <Person name="Rahim" job="Doctor"></Person>
      <Person name="Hafiz" job="Engineer"></Person>

      <Person name={professionals[0]} job="Teacher"></Person>
      <Person name={professionals[1]} job="Doctor"></Person>
      <Person name={professionals[2]} job="Engineer"></Person>
*/
