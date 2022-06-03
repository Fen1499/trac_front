import { Form, Input, Button, Select, Modal, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from "react";

const HomePage = ({ handleLogin, handleLogout }) => {
  return (
    <div className="HomePage">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={null}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>

      <br />
      <Space>
        <Button type="primary" onClick={() => handleLogin()}>Click to fake login</Button>
        <Button type="primary" onClick={() => handleLogout()}>Click to fake logout</Button>
      </Space>
    </div>
  )
}

export default HomePage