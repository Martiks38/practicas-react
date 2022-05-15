import styles from './tasklist.module.css'

function TaskList({ taskList }) {
  return (
    <ul>
      {taskList.map((task, index) => (
        <li key={'id' + index} className={styles.task}>
          <span className={styles.taskValue}>{task}</span>
          <div className={styles.panelButton}>
            <button className={styles.taskButton} data-id={'id' + index}>
              ❌
            </button>
            <button className={styles.taskButton} data-id={'id' + index}>
              ✔️
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
