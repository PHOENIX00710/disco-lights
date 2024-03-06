import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const colors = ['red', "orange", "yellow", 'green', "cyan", "blue", "magenta"]
  const [currColor, setCurrColor] = useState("black")
  const [index, setIndex] = useState(0)
  const [turnOnDisco, setTurnOnDisco] = useState(false)
  const [startStop, setStartStop] = useState("Start")


  useEffect(() => {
    let interval = null;
    if (turnOnDisco) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 200);
    }
    else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, [turnOnDisco, colors.length]);

  useEffect(() => {
    setCurrColor(colors[index]);
  }, [index]); // This useEffect updates currColor whenever index changes

  const disco = (e) => {
    e.preventDefault()
    setTurnOnDisco((prevState) => (
      !prevState
    ))
    if (startStop === "Start")
      setStartStop("Stop")
    else if (setStartStop === "Stop")
      setStartStop("Start")
  }

  return (
    <>
      <div
        id="wrapper"
        className={`min-h-screen`}
        style={{
          backgroundColor: currColor,
        }}
      >
        <button
          className={`absolute text-2xl bottom-2 left-1/2 bg-black text-white py-2 px-4 rounded-xl `}
          onClick={disco}
        >
          {startStop}
        </button>
      </div>
    </>
  )
}

export default App
