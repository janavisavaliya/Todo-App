import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [todo, setTodo] = useState([]);

  const getTodo = () => {
    fetch(`http://localhost:8000/`)
      .then(res => res.json())
      .then(data => {
        setTodo(data.todo)
      })
  }
  useEffect(() => {
    getTodo()
  }, [])
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Due_Date</th>
            <th>Priority</th>
            <th>Created_at</th>
            <th>Updated_at</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.description}</td>
                  <td>{val.completed}</td>
                  <td>{val.due_date}</td>
                  <td>{val.priority}</td>
                  <td>{val.created_at}</td>
                  <td>{val.updated_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
