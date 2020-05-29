import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import EditExercises from './components/EditExercises';
import { ExercisesList } from './components/ExercisesList';
import CreateExercises from './components/CreateExercises';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercises} />
      <Route path="/create" exact component={CreateExercises} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
