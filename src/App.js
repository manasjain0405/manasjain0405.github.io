import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Home from './components/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navigation />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
