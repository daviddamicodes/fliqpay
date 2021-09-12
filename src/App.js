import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payout from './components/Payout/Payout';
import RecipientPage from './components/Recipient/RecipientPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Payout} />
        <Route path="/recipient" component={RecipientPage} />
      </Switch>

    </Router>
  );
}

export default App;
