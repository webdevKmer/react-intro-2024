const CourseInfo = (props) => {
  const title = 'Full Stack Development with MERN'
  const part1 = 'Fundamentals'
  const exo1 = 10
  const part2 = 'Using State'
  const exo2 = 9
  const part3 = 'Using Props'
  const exo3 = 13
    return (
      <>
      <Header title={title}/>
      <Content part1={part1} exo1={exo1} part2={part2} exo2={exo2} part3={part3} exo3={exo3} />
    </>
  )
}
const Content = (props) => {
  return (
    <>
    <Part p1={props.part1} ex1={props.exo1}/>
    <Part p1={props.part2} ex1={props.exo2}/>
    <Part p1={props.part3} ex1={props.exo3}/>
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}
const Part = (props) => {
  return (
    <h3>{props.p1}   ---    <span>Nombre d'exercices : {props.ex1}</span></h3>
  )
}


export default CourseInfo