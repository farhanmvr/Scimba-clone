import { Route, Switch } from 'react-router';
import Navbar from './components/nav/Navbar';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact component={LandingPage} />
      </Switch>
    </>
  );
};

export default App;
