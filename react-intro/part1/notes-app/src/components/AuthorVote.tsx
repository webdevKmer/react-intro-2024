import { useState } from "react"

const AuthorVote = () => {
    const authors = [
        "Jack Bauer",
        "John Smith",
        "John Snow",
        "Jane Doe",
        "Ursula Nickel",
    ]
    const [index, setIndex] = useState(0)

    const nextIndex = () => {
        const next_index = Math.floor(Math.random() * authors.length)
        console.log(next_index);
        setIndex(next_index)
    } 

    const [votes, setVotes] = useState(Array(authors.length).fill(0))

    const updateVote = () => {
        const copy = [...votes]
        copy[index] = copy[index] + 1
        setVotes(copy)
    }
  return (
    <>
        <h3>{authors[index]}</h3>
        <button onClick={nextIndex}>NextAuthor</button>
        <p>Number of votes : {votes[index]}</p>
        <button onClick={updateVote}>Vote</button>
    </>
  )
}

export default AuthorVote