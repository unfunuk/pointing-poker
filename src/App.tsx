import { Route, Switch } from 'react-router';
import './App.css';
import ROUTES from './routes/routes';

function App() {
  return (
    <div>
      <Switch>
        {ROUTES.map((route) => (
          <Route
            key={route.key}
            exact
            path={route.path}
            component={route.component}></Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
