import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
