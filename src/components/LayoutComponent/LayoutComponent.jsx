import "./Component.css"

import React, {useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, Layout } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

const LayoutComponent = ({token}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  //This function has to deal with auth

  const onClick = (e) => {
    console.log('click ', e);
    token === null ? navigate('/') : navigate('/'+e.key)
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" Style={"color: white;"}> LOGO GOES HERE </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={onClick}
          items={[
            {
              key: '',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: 'companies',
              icon: <VideoCameraOutlined />,
              label: 'Companies',
            },
          ]}
        >
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet/>
        </Content>
        <Footer className="LayoutFooter">{"There is no copyright or anything   ¯\\_(ツ)_/¯"}</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent;