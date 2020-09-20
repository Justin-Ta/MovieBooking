import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PagenotFound/PageNotFound';
import profile from './pages/profile/profile';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/detail/:id' component={Detail}/>
    <Route exact path='/profile' component={profile}/>

    <Route exact path='/' component={Home}/>
    <Route exact path='*' component={PageNotFound}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
