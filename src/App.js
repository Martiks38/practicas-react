import Header from 'components/Header'
import Main from 'components/Main'
import Home from 'pages/home'
import Todolist from 'pages/todolist'
import { Route, Switch } from 'wouter'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/todolist" component={Todolist} />
        </Switch>
      </Main>
    </>
  )
}

export default App
