import React from 'react';
import { connect } from 'react-redux';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//import Login from '../Login/Login';
import updateDetails from '../../Redux/action';

function Dashboard (props) {   
    return (
        <div>
            <p>Authentication successful..!! Click on below button for details</p>
            <p><button onClick={props.updateDetails}>Show</button></p>
            <h2>Employee Details</h2>
            <h4>{JSON.stringify(props.details)}</h4>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        details: state.details
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateDetails: () => dispatch(updateDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);