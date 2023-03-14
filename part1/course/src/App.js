// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

////////////////// osa 1.2->

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }


// const App = () => {
//   const nimi = 'Pekka'
//   const ika = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={nimi} age={ika} />
//     </div>
//   )
// }
////////////////////////////////////////// osa 1.3 ->

import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   // setTimeout(
//   //   () => setCounter(counter + 1),
//   //   1000
//   // )

//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }

//   const increaseByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)
//   const decreaseByOne = () => setCounter(counter - 1)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button handleClick={increaseByOne} text='plus'/>
//       <Button handleClick={setToZero} text='zero'/>
//       <Button handleClick={decreaseByOne} text='minus'/>
//     </div>
//   )
// }

//////////////////////////////////////////////////////////////// 1c.

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div> the app is used by pressing the button</div>
    )
}
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])
  const [ total, setTotal ] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }
  

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left'/>
        <Button handleClick={handleRightClick} text='right'/>   
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

export default App



