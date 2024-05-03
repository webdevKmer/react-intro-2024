import Hello from "./components/Hello"
import CourseInfo from "./components/CourseInfo"
import Counter from "./components/Counter"
import LeftAndRightClick from "./components/LeftAndRightClick"
import Feedback from "./components/Feedback"
import AuthorVote from "./components/AuthorVote"
import NoteApp from "./components/NoteApp"
import CoursesApp from "./components/CoursesApp"

const App = () => {
  
  return (
    <>
    <CoursesApp />
    <hr />
    <NoteApp />
    <hr />
    <AuthorVote />
    <hr />
    <Feedback />
    <hr />
    <LeftAndRightClick/>
    <hr />
    <Hello name='John'/>
    <Hello name='Smith'/>
    <Goodbye />
    <hr />
    <Counter />
    <hr />
    <CourseInfo />
    </>
  )
}

const Goodbye = () => {
  return (
    <h2>Goobye Everybody!</h2>
  )
}

export default App

