import { Card, Row, Col, Button, Space } from 'antd';
import React, { useState } from "react";
import UnitForm from '../Forms/UnitForm';
import UserForm from "../Forms/UserForm";
const CompanyCard = () => {

  const cardStyle = {
    display: 'flex',
    'flex-direction': 'column',
  }

  const imgStyle = {
    width: '50%',
    heigth: '50%'
  }

  const [visible, setVisible] = useState(false);

  const showModal = () => { 
    setVisible(true);
  };

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col>
          <Card
            title="Company name"
            style={cardStyle}
            cover={<img alt="example" src="logo192.png" />}
          >
            <Space>
              <Space direction="vertical">
                <Button> View Users </Button>
                <Button onClick={() => showModal()}> Add User</Button>
              </Space>
              <Space direction="vertical">
                <Button> View Units </Button>
                <Button onClick={() => showModal()}> Add Unit </Button>
              </Space>

            </Space>
          </Card>
        </Col>
      </Row>
      <UserForm vis={visible} setVis={setVisible}/>
      <UnitForm vis={visible} setVis={setVisible}/>
    </div>

  )
}

export default CompanyCard