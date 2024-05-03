import Note from "./Note"

const NoteApp = () => {
    const notes = [
        {
            id: 1,
            person: "Geralt",
            value: 97,
        },
        {
            id: 2,
            person: "Esmeralda",
            value: 47,
        },
        {
            id: 3,
            person: "Arthur",
            value: 55,
        },
        {
            id: 4,
            person: "Esperance",
            value: 40,
        },
        {
            id: 5,
            person: "Geraldine",
            value: 86,
        },
    ]
  return (
    <>
        <div>NoteApp</div>
        <h2>List of all notes.</h2>
        {notes.map(note => (
            <Note key={note.id} note={note}/>
        ))}
    </>
  )
}

export default NoteApp