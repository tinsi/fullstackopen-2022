
const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Part = ({part}) => {
  const {name, exercises} = part;
  return <p> {name} {exercises} </p>
}

const Content = ({parts}) => {
  console.log(parts)
  return parts.map((part, i) => <Part key={i} part={part} exercises={part.exercises} />);
}


const Total = ({parts}) => {
  
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  );
 }

 const Course = ({ course }) => {
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
  
 }
const App = () => {
  const course = [{
    name: 'Half Stack application development',
    id: 1,
    parts: [{
      name:  'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Extra course',
      exercises: 3,
      id: 4
    }
  ]
  },
  {
    name: 'Node.js development',
    id: 2,
    parts: [{
      name: 'Routing',
      exercises: 3,
      id: 1
    },
    {
      name: 'Testing',
      exercises: 5,
      id: 2
    },
    {
      name: 'Routing',
      exercises: 5,
      id: 2
    }
  ]
}
]

  const { name, parts } = course;
  //const exercises = parts.map(part => part.exercises);
  

  return (
    <div>
      <Course course={course}/>
      
    </div>
  )
}

export default App;