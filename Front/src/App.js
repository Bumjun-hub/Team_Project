import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import axios from "axios";


function App() {
  return (
    <div className="App">
      
      <Header/>
      <button onClick={()=>{
        axios
          .post("/user/insert")
          .then((result)=>{
              console.log(result)
          })
      }}>클릭</button>
      <Section/>
      





    </div>
  );
}

export default App;
