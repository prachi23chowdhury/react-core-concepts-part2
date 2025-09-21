
import './App.css'
import Counter from'./counter';
import Batsman from './batman';
function App() {
  
  function handleClick(){
    alert ('I am clicked.')
  }
const handleClick3 =() =>{
    alert('Clicked 3')
  }
  const handleAdd5 =(num)=>{
    const newNumber = num + 5;
    alert(newNumber)
  }
  return (
    <>
     
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick='handleClick()'>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function  handleClick2(){alert('Clicked 2')}}>Click Me2</button>
      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={() => alert("clicked4")}>Click Me4</button>
      <button onClick={()=> handleAdd5(7) }>Click Add 5</button>
    </>
  )
}

export default App
