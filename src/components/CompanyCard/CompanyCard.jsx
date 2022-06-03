import { Card, Row, Col, Button, Space } from 'antd';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UnitForm from '../Forms/UnitForm';
import UserForm from "../Forms/UserForm";
const CompanyCard = () => {

  const cardStyle = {
    display: 'flex',
    'flex-direction': 'column',
  }

  const navigate = useNavigate();
  const onClick = (e) => {
    console.log('click ', e);
    //token === null ? navigate('/') : navigate('/'+e.key)
    navigate('/'+e)
  };

  const [visibleUserForm, setVisibleUserForm] = useState(false);
  const [visibleUnitForm, setVisibleUnitForm] = useState(false);

  const showModal = (setter) => {  
    setter(true);
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
                <Button onClick={() => onClick('users')}> View Users </Button>
                <Button onClick={() => showModal(setVisibleUserForm)}> Add User</Button>
              </Space>
              <Space direction="vertical">
                <Button onClick={() => onClick('units')}> View Units </Button>
                <Button onClick={() => showModal(setVisibleUnitForm)}> Add Unit </Button>
              </Space>

            </Space>
          </Card>
        </Col>
      </Row>
      <UserForm vis={visibleUserForm} setVis={setVisibleUserForm}/>
      <UnitForm vis={visibleUnitForm} setVis={setVisibleUnitForm}/>
    </div>

  )
}

export default CompanyCard