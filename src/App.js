import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import "./styles.css"
import YoutubeEmbed from "./components/YoutubeEmbed"


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Practice cooking rice",
        description: "Try and take mental notes of what could be improved with your technique.",
        reminder: true,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <h1>Part 1: How To Cook Rice </h1>
      <YoutubeEmbed embedId="Jf75I9LKhvg" />
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>: ("You are done with all your tasks! :)")}
    </div>
  );
}

export default App;
