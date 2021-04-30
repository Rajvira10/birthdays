import Card from "./Card";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Person from "./Person";
import './index';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Card/>
            </Route>
            <Route path="/:id">
              <Person></Person>
            </Route>
          </Switch>  
        </div>
      </div>
    </Router>
  );
}

export default App;
