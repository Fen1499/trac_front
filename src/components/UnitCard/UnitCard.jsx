import React from 'react';
import { Row, Col, Card } from 'antd';
import BarChart from '../BarChart/BarChart';
import AssetCard from '../AssetCard/AssetCard';

const UnitCard = () => {
    return (
        <Card title="Unit name">
        <Row gutter={24}>
          <Col>
            <BarChart />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>
            <AssetCard />
          </Col>
          <Col>
            <AssetCard />
          </Col>
          <Col>
            <AssetCard />
          </Col>
        </Row>
      </Card>
    )
}

export default UnitCard