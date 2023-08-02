import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import BookTicket from './components/BookTicket'

import './App.css';

const App = () => {
  
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book-tickets" component={BookTicket} />
    </Switch>
  )
}

export default App;
