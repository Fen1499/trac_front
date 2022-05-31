import React from 'react';
import { Row, Col, Card } from 'antd';
import BarChart from '../BarChart/BarChart';
import AssetCard from '../AssetCard/AssetCard';

const UnitCard = () => {

  const demo_data = [{
    name: "red",
    data: [1],
    color: "red"
  }, {
    name: "yellow",
    data: [2],
    color: "yellow"
  }, {
    name: "green",
    data: [2],
    color: "green"
  }]

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
        <Col offset={6}>
          <BarChart
            p_title={"assets status"}
            p_height={120}
            p_category={"assets"}
            p_data = {demo_data}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {demo}
        {demo}
        {demo}
        {demo}
      </Row>
    </Card>
  )
}

export default UnitCard