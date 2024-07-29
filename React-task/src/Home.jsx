import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Form ,Input ,Button} from 'antd';

import './App.css';

const Home = () => {

    const navigate = useNavigate()
    const onFinish = (values) => {
      console.log('Success:', values);
      navigate('/about');
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div style={{ maxWidth: 400, margin: '100px auto' }}>
        <h2>Sign In</h2>
        <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
  
  
          
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
  
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
  
          <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
          </Form.Item>
  
  
  
  
        </Form>
      </div>
    );
  };

export default Home;
