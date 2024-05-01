import Hello from "./components/Hello"
import CourseInfo from "./components/CourseInfo"
import Counter from "./components/Counter"

const App = () => {
  
  return (
    <>
    <Hello name='John'/>
    <Hello name='Smith'/>
    <Goodbye />
    <Counter />
    {/* <CourseInfo /> */}
    </>
  )
}

const Goodbye = () => {
  return (
    <h2>Goobye Everybody!</h2>
  )
}

export default App

