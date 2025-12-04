import logo from './logo.svg';
import './App.css';
import MyButton from './Components/MyButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton2 from './Components/MyButton copy';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './Components/LoginPage';
import LandingPage from './Components/landingPage';

function App() {

  //   //const data= '1';
  //   const entity=1;

  //   const [name, setName ] = useState('Athira')

  // const handleClick = () => {
  //   setName('Vanitha');
  // }

  // const handleChange = (e) => {
  //  console.log(e.target.value);
  //    setName('name is' + e.target.value);
  // }
  //   return (
  //   //   <div className="App">
  //   //   <h1>Hello World</h1>
  //   // {data === '2' ? ( <MyButton data={data}/>) : ( <MyButton2 data={data}/>)}
  //   //   </div>
  //   // <BrowserRouter>
  //     //  <Routes>
  //     //   <Route path='/' element={<MyButton data={data}/>}/>
  //     //    <Route path='/data' element={<MyButton2 data={data}/>}/>
  //     //  </Routes>
  //     //  </BrowserRouter>
  //   <div className="beautify">
  //     <h1>LOGIN PAGE</h1>
  //     <li >
  //       <p>{name}</p>
  //       <p>PASSWORD</p>
  //     </li>
  //     <button onClick={handleClick}>Click Me</button>
  //     <input onChange={handleChange} placeholder='enter name:' />
  //     <button>
  //       <BrowserRouter>
  //       <Routes>
  //         <Route path='/' element={<MyButton />}/>
  //         <Route path='/data' element={<MyButton2 entity={entity}/>}/>
  //       </Routes>
  //       </BrowserRouter>
  //     </button>
  //     {entity === 1 ? ( <MyButton />) : ( <MyButton2 entity={entity}/>)} 
  //     <input type="text" placeholder='enter name'/> 
  //   </div>
  //   );
  const [num1, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  // const navigate = useNavigate();
  const handleIncrement = () => {
    setNum3(num1 + num2);
  }
  // const handleClick = () => {
  //   navigate("/landing");
  // }
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/landing' element={<LandingPage />} />
      </Routes></BrowserRouter>

  )
}

export default App;
