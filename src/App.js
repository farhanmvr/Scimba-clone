import { Route, Switch } from 'react-router';
import Header from './components/nav/Header';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact component={LandingPage} />
      </Switch>
    </>
  );
};

export default App;
