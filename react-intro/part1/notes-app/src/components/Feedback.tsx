import { useState } from "react"

const Feedback = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })

    const updateGood = () => {
        setFeedback({
            ...feedback,
            good : feedback.good + 1
        })
    }

    const updateNeutral = () => {
        setFeedback({
            ...feedback,
            neutral : feedback.neutral + 1
        })
    }

    const updateBad = () => {
        setFeedback({
            ...feedback,
            bad : feedback.bad + 1
        })
    }

  return (
    <>
        <h2>Feedback</h2>
        <button onClick={updateGood}>Good</button>
        <button onClick={updateNeutral}>Neutral</button>
        <button onClick={updateBad}>Bad</button>
        <h2>Stats</h2>
        <Stats good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/>        
    </>
  )
}
const Stats = ({good, neutral, bad}) => {
    if(good == 0 && neutral == 0 && bad == 0){
        return(
            <p>No Feedback given!</p>
        )
    }
    return (
        <>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
        </>
    )
}

export default Feedback