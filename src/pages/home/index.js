import styled from 'styled-components'
import { Link } from 'wouter'
import styles from './home.module.css'

const Topic = styled(Link)`
  width: min-content;
  padding: 0.6rem 1rem;
  background-color: #333;
  border-radius: 6px;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-white);
`

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.contentTopic}>
        <Topic href="/todolist">Todolist</Topic>
        <Topic href="/shop">Shop</Topic>
      </div>
    </div>
  )
}

export default Home
