import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';

const Alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <Wrap>
    <div key={alert.id} className={`alerts-${alert.alertType}`}>
        {alert.msg}
    </div>
    </Wrap>
))

const mapStateToProps = state => ({
    alerts: state.alert.alert
})

export default connect(mapStateToProps)(Alert)

const Wrap = styled.div`
text-align: center;
margin-top: 0.5rem;
.alerts-danger{
    color: red;
    text-align: center;
}
.alerts-success{
    color: white;
    background: green;
    text-align: center;
}
`