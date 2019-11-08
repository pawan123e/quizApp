import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Quiz from './components/Quiz'
import HtmlQuiz from './components/HtmlQuiz'
import CssQuiz from './components/CssQuiz'
import JavascriptQuiz from './components/JavascriptQuiz'
import Result from './components/Result'
import Review from './components/Review'
import {Provider} from 'react-redux';
import store from './store'
import PrivateRoute from './route/PrivateRoute'
import ErrorNotFound from './components/ErrorNotFound'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PrivateRoutes from './routing/PrivateRoute'
import authAccess from './utils/authAccess'
import { loadUser } from './actions/auth';
const App = () => {
    if(localStorage.token) {
      authAccess(localStorage.token)
    }
  
    useEffect(() => {
        store.dispatch(loadUser()); 
        
    }, [localStorage.token])
  
  
  return (
    <Provider store={store} >
    
    <Router>
    <NavBar/>
      <Switch>
        <Route exact path='/' component={Quiz}/>
        <PrivateRoutes exact path='/html_quiz' component={HtmlQuiz}/>
        <PrivateRoutes exact path='/css_quiz' component={CssQuiz}/>
        <PrivateRoutes exact path='/javascript_quiz' component={JavascriptQuiz}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/result' component={Result}/>
        <PrivateRoute exact path='/review' component={Review}/>
        <Route component={ErrorNotFound}/>
      </Switch>
    <Footer/>  
    </Router>
    
    </Provider>
  )
}

export default App;


