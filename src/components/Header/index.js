import { TabMenu } from 'components/TabMenu'
import styles from './header.module.css'

function Header() {
  const pathname = location.pathname

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <TabMenu href="/">Inicio</TabMenu>
        {pathname != '/todolist' && (
          <TabMenu href="/todolist">Todolist</TabMenu>
        )}
        {pathname != '/shop' && <TabMenu href="/shop">DigitalShop</TabMenu>}
      </nav>
    </header>
  )
}

export default Header
