import React, { Component } from 'react';

import { 
  Form, 
  Icon, 
  Input, 
  Button,
  Checkbox
} from 'antd';


class NormalLoginForm  extends Component {

    constructor (props){
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            this.props.loginFormSubmit(values);
        }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit={this.handleSubmit} className="login-form login-form--adminPanel">
            <Form.Item>
            {getFieldDecorator('email', {
                rules: [
                { type: 'email', message: 'Email is not valid!' },
                { required: true, message: 'Please input your email!' }],
            })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
                Log in
            </Button>
            <div>
                Or <a href="/register">register now!</a>
            </div>
            </Form.Item>
            <Form.Item>
            <a className="login-form-forgot" href="#">Forgot password</a>          
            </Form.Item>
        </Form>
        );
    }
}

const WrappedNormalLoginForm  = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default WrappedNormalLoginForm;