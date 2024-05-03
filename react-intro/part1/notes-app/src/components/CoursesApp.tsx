const CoursesApp = () => {
    const courses = [
        {
            id: 1,
            title: "Learning the basics of React",
            lessons : [
                {
                    id:1,
                    title: "Using Props",
                    exercices: 4
                },
                {
                    id:2,
                    title: "Using State",
                    exercices: 6
                },
                {
                    id:3,
                    title: "Forms in React",
                    exercices: 10
                },
            ]
        },
        {
            id: 2,
            title: "Python",
            lessons : [
                {
                    id:1,
                    title: "Flask Framework",
                    exercices: 2
                },
                {
                    id:2,
                    title: "Django Framework",
                    exercices: 7
                },
                {
                    id:3,
                    title: "Python Fundamentals",
                    exercices: 15
                },
            ]
        },
        {
            id: 3,
            title: "Javascript",
            lessons : [
                {
                    id:1,
                    title: "Flask Framework",
                    exercices: 2
                },
                {
                    id:2,
                    title: "Django Framework",
                    exercices: 7
                },
                {
                    id:3,
                    title: "Python Fundamentals",
                    exercices: 15
                },
            ]
        },
        {
            id: 4,
            title: "Databases",
            lessons : [
                {
                    id:1,
                    title: "MongoDB",
                    exercices: 8
                },
                {
                    id:2,
                    title: "MySQL",
                    exercices: 12
                },
                {
                    id:3,
                    title: "SQLite",
                    exercices: 9
                },
            ]
        },
    ]

    const Header = ({course}) => {
        return (<>
            <h2>{course.title}</h2>
        </>)
    }

    const Lessons = ({course}) => {
        return (<>
            {course.lessons.map(lesson => (
                <>
                    <p>{lesson.title}</p>
                    <p>Number of exercices : {lesson.exercices}</p>
                </>
            ))}
        </>)
    }

    const Total = ({course}) => {
        const getSum = (total, lesson) => {
            return lesson.exercices + total
        }
        return (<>
            <strong>Total exercices : {course.lessons.reduce(getSum, 0)}</strong>
        </>)
    }

  return (
    <>
        {courses.map(course => (
            <>
                <Header course={course}/>
                <Lessons course={course}/>
                <Total course={course}/>
            </>
        ))}
    </>
  )
}

export default CoursesApp