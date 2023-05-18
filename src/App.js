import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/menu" component={Menu} />
    </Switch>
  );
}

export default App;
