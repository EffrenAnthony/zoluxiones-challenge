import { Layout } from './Layout'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import './assets/styles/commons.scss'
import { Main } from './pages/Main'
import { Finish } from './pages/Finish'
const App = () => {
  return (
    <>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/finish" component={Finish} />
        </Switch>
      </Layout>
    </Router>
    </>
    )
}

export default App
