import { useState } from "react"

const LeftAndRightClick = () => {

  const [history, setHistory] = useState([])
  const [total, setTotal] = useState(0)

  const [click, setClick] = useState({
    left: 0,
    right: 0,
  })

  const updateLeft = () => {
    setClick({
      ...click,
      left: click.left + 1
    })
    setHistory(history.concat('L'))
    setTotal(total+1)
  }
  
  const updateRight = () => {
    setClick({
      ...click,
      right: click.right + 1
    })
    setHistory(history.concat('R'))
    setTotal(total+1)
  }

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  // const changeLeft = () => {
  //   setLeft(left + 1)
  // }
  // const changeRight = () => {
  //   setRight(right + 1)
  // }

  return (
    <>
      <span>{click.left}</span>
      <button onClick={updateLeft}>Left</button>
      <button onClick={updateRight}>Right</button>
      <span>{click.right}</span>
      <p>{history.join(" ")}</p>
      <p>Total Number of Clicks: {total}</p>
    </>
  )
}

export default LeftAndRightClick