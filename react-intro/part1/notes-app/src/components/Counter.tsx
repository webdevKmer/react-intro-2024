import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }
    const zero = () => {
        setCounter(0)
    }
  return (
    <>
    <div>{counter}</div>
    <button onClick={increase}>Increase</button>
    <button onClick={zero}>Zero</button>
    <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default Counter