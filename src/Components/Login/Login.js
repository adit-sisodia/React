import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        isAuthenticate: false,
        show: false
    }
    
    handleChange= (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    loginHandler = () => {
    const { username, password } = this.state;
    if(username === 'hruday@gmail.com' && password === 'hruday123'){
        console.log('Authenticated')
        this.setState({isAuthenticate: true, show: true})
     }
     else {
        alert('Authentication Fails')
         this.setState({isAuthenticate: false})
     }
    }

    render() {
        const { username, password} = this.state;
        if(this.state.show) {
            return(
                <BrowserRouter>
                <div>
                    <Redirect to="/dashboard" />
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
                </BrowserRouter>
            )     
        }
        return (
            <BrowserRouter>
            <div>
                <h1>Welcome to the Home Page</h1>
                <h2>Login</h2>
                <div>
                    <label>Username </label>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={this.loginHandler}>Login</button>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}


export default Login;