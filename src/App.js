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
            <Route exact path="/birthdays/">
              <Card/>
            </Route>
            <Route path="/birthdays/:id">
              <Person></Person>
            </Route>
          </Switch>  
        </div>
      </div>
    </Router>
  );
}

export default App;
