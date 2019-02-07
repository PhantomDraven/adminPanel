import React, { Component } from 'react';

import { withFirebase } from '../../firebase';

import App from '../../App';

import { Row, Col } from 'antd';

import WrappedRegistrationForm from '../../components/FormRegister';

import './style.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.registerFormSubmit = this.registerFormSubmit.bind(this);
    }
    registerFormSubmit(){
        //TODO: manage register;
    }
    render() {
        return (
            <App title="Register">
                <h1>
                    Register Page
                </h1>
                <div>
                  <Row type="flex" justify="center" gutter={15} >
                    <Col xs={{span:24}} className="admin-register-wrap" >
                      <WrappedRegistrationForm registerFormSubmit={this.registerFormSubmit}/>
                    </Col>
                  </Row>
                </div>
            </App>
        );
    }
}

export default withFirebase(Register);
