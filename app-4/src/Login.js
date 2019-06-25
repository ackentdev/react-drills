import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.changeUser = this.changeUser.bind(this);
        this.changePass = this.changePass.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    changeUser(value){
        this.setState({username: value});
    }

    changePass(value){
        this.setState({password: value});
    }

    handleLogin() {
        alert(`username: ${this.state.username} password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input className='username' placeholder="Username" type="text"
                onChange={event => this.changeUser(event.target.value)}/>
                <input className='password' placeholder="Password" type="text"
                onChange={event => this.changePass(event.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }

}

export default Login;