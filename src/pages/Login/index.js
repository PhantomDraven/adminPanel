import React, { Component } from 'react';

import { withFirebase } from '../../firebase';

import App from '../../App';

import { Row, Col } from 'antd';

import WrappedNormalLoginForm from '../../components/FormLogin';

import './style.css';
class Login extends Component {
    constructor(props){
        super(props);
        this.loginFormSubmit = this.loginFormSubmit.bind(this);
    }
    loginFormSubmit(){
        //TODO: manage login;
    }
    render() {
        return (
            <App title="Login">
                <h1>
                    Login Page
                </h1>
                <div>
                  <Row type="flex" justify="center" gutter={15} >
                    <Col xs={{span:24}} className="admin-login-wrap" >
                      <WrappedNormalLoginForm loginFormSubmit={this.loginFormSubmit} />
                    </Col>
                  </Row>
                </div>
            </App>
        );
    }
}

export default withFirebase(Login);
