import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

let experts = [
  {
    id: 1,
    name:'Mazhar', 
    job:'React', 
    experience: 2
  }, 
  {
    id: 2,
    name:'Sizan', 
    job:'Jango', 
    experience: 3
  }, 
  {
    id: 3,
    name:'Anik', 
    job:'Angular', 
    experience: 1.5
  }
];

let name = ['Mazhar', 'Sizan', 'Anik'];
let job = ['React', 'Jango', 'Angular'];
let exp = [2,3,1];
let project = [5,7,2];
const Style = {
  border: '4px solid tomato',
  margin: '10px',
  padding: '2px 20px',
  borderRadius: '15px',
  backgroundColor: 'gray',
  height: '500px',
  width: '500px'
}



function App() {
  const [name, setName] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>  setName(data))
  
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* static */}
      <div  style = {Style}>
        <Names key={1} name="Mazharul Islam" job="UI" exp="3" project="3"></Names>
        <ProjectCounter></ProjectCounter>
      </div>
      {/* static */}

      {/* dynamic */}
      {
        experts.map(data =>  
            <div style = {Style}>
              <Names name={data.name} key={data.id} job={data.job} exp={data.experience}></Names>
              <ProjectCounter></ProjectCounter>
            </div>
          )
      }
      <h1>Dta from JSON Place Holder</h1>
      {
        name.map(data =>  
            <div style = {Style}>
              <Names name={data.name} key={data.id} job={data.job} exp={data.experience}></Names>
              <ProjectCounter></ProjectCounter>
            </div>
          )
      }

      {/* <div style = {Style}>
        <Names name={name[0]} job={job[0]} exp={exp[0]}></Names>
        <ProjectCounter></ProjectCounter>
      </div>
      <div style = {Style}>
        <Names name={name[1]} job={job[1]} exp={exp[1]}></Names>
        <ProjectCounter></ProjectCounter>
      </div>
      <div style = {Style}>
        <Names name={name[2]} job={job[2]} exp={exp[2]}></Names>
        <ProjectCounter></ProjectCounter>
      </div> */}
      {/* dynamic */}
      </header>
    </div>
  );
}

function ProjectCounter() {
  const [count, setCount] = useState(0);

  const buttonHandler = () => setCount(count + 1);

  return(
    <div>
      <button onClick={buttonHandler}>ADD A NEW PROJECT</button>
      <h3>New Projects Submitted : {count}</h3>
      <ProjectDisplay number={count + 5}></ProjectDisplay>
    </div>
  )
}

function ProjectDisplay(props) {
  return (
    <h2>Number of projects : {props.number}</h2>
  )
}

function Names(props){
  return (
  <div>
    <h1>Hi there, I'm {props.name}</h1>
    <h3>I'm a {props.job} developer</h3>
    <p>I'm working with {props.job} for {props.exp} years</p>
  </div>
  )
}

export default App;