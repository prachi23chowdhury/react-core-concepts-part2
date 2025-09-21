import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0)
    const handleRuns = () => {
        const newRuns = runs + 1;
        setRuns(newRuns)
    }
     const handleRuns4 = () => {
        const newRuns = runs + 4;
        setRuns(newRuns)
    }
    const handleRuns6 = () => {
        const newRuns = runs + 6;
        setRuns(newRuns)
    }
    return(
        <div>
            <h3>Players: Bangla Batsman</h3>
            {
                runs > 50 && <p>your score: {runs}</p>
            }
            <h1>Score:{runs} </h1>
            <button onClick={handleRuns}>Singles</button>
            <button onClick={handleRuns4}>Four</button>
            <button onClick={handleRuns6}>Six</button>
        </div>
    )
}