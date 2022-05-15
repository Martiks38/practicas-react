import { useEffect, useState } from 'react'
import api from 'api/tasklist.js'
import styles from './todolist.module.css'

function Todolist() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    api.list().then(setTaskList)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTask = event.currentTarget.task.value.trim()

    if (!newTask) return

    setTaskList([
      ...taskList,
      {
        task: newTask,
        id: Date.now(),
        complete: false,
      },
    ])
    event.currentTarget.task.value = ''
  }

  const handleComplete = (id) => {
    let taskState = taskList.map((task) =>
      task.id !== id ? task : { ...task, complete: !task.complete }
    )

    setTaskList(taskState)
  }

  const removeTask = (id) => {
    let newList = taskList.filter((task) => task.id !== id)
    setTaskList(newList)
  }

  return (
    <section className={styles.contentTodolist}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labelInput}>
          <input
            type="text"
            name="task"
            className={styles.inputTask}
            autoComplete="off"
            placeholder="Añada una nueva tarea"
            autoFocus
          />
          <button className={styles.plus}>Añadir</button>
        </label>
      </form>
      <div className={styles.tasks}>
        <h1>Lista de tareas</h1>
        {!taskList.length ? (
          'loading example tasks...'
        ) : (
          <ul>
            {taskList.map((task) => (
              <li key={task.id} className={styles.task}>
                <span
                  className={
                    task.complete
                      ? `${styles.completedTask} ${styles.taskValue}`
                      : `${styles.taskValue}`
                  }
                  onClick={() => handleComplete(task.id)}
                >
                  {task.task}
                </span>
                <button
                  className={styles.taskButton}
                  onClick={() => removeTask(task.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Todolist
