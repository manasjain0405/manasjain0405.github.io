import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Home from './components/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubSquare, faLinkedin, faMedium, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import { fas, faEnvelopeSquare, faCode, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faLinkedin, faTwitterSquare, faGithubSquare, faEnvelopeSquare, faMedium, faCode, faMapMarkerAlt);

function App() {
  return (
    <div className="App dark">
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
