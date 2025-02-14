import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const arr = ['1111', '2222', '3333']

  console.log(arr[arr.length - 2]);

  const string = 'madam'

  let isPalandrome = false

  const reverseString = string.split('').reverse().join('')

  if (string === reverseString) {
    isPalandrome = true;
  }

  console.log(isPalandrome);

  return (
    <>
      <h1>React Learning !</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Seconds: {seconds}</p>
      </div>
    </>
  )
}

export default App