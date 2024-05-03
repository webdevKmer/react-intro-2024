const Note = ({note}) => {
  return (
    <>
        <h4>{note.person}</h4>
        <p>{note.value}</p>
    </>
  )
}

export default Note