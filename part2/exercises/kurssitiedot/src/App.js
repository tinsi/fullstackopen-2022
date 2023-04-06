import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name:  'Fundamentals of React',
          exercises: 10,
          partId: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          partId: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          partId: 3
        },
        {
          name: 'Extra course',
          exercises: 3,
          partId: 4
        }
      ]
     },
    {
      name: 'Node.js development',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          partId: 5
        },
        {
          name: 'Testing',
          exercises: 5,
          partId: 6
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses}/>
    </div>
  )
}

export default App;