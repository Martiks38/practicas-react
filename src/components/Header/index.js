import { TabMenu } from 'components/TabMenu/index'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <TabMenu href="/">Inicio</TabMenu>
        <TabMenu href="/">Todolist</TabMenu>
        {/* <TabMenu href="/">Inicio</TabMenu> */}
      </nav>
    </header>
  )
}

export default Header
