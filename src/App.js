import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Dashboard from './pages/dashboard.component';
import Lessons from './pages/lessons.component';
import Quiz from './pages/quiz.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/lessons"component={Lessons} />
          <Route exact path="/lessons/:id"component={Quiz} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
