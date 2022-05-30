import React from 'react';
import { Row, Col, Card } from 'antd';
import BarChart from '../BarChart/BarChart';
import AssetCard from '../AssetCard/AssetCard';

const UnitCard = () => {

    const demo = <>
        <Col>
            <AssetCard />
          </Col>
          <Col>
            <AssetCard />
          </Col>
          <Col>
            <AssetCard />
        </Col>
    </>

    return (
        <Card title="Unit name">
        <Row gutter={[24, 24]}>
          <Col offset={6} span={12}>
            <BarChart />
          </Col>
        </Row>
        <Row gutter={[16,16]}>
          {demo}
          {demo}
          {demo}
          {demo}
        </Row>
      </Card>
    )
}

export default UnitCard