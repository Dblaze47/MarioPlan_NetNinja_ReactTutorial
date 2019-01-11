import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectDetails';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import CreateProject from './components/projects/createProject';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/create-project" component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
