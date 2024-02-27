
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationPage from './Components/RegistrationPage';
import ProfilePage from './Components/ProfilePage';
import LoginPage from './Components/LoginPage';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={RegistrationPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;