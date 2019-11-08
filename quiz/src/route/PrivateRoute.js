import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, length, ...rest}) => (
    
    <Route {...rest} render={props => length === null  ? (<Redirect to='/' />) : 
       (
          <Component {...props}/>
        )
    }
    />
)

const mapStateToProps = state => ({
    length: state.question.length
})


export default connect(mapStateToProps)(PrivateRoute)
