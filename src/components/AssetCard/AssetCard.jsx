import React from 'react';
import { Card } from 'antd';
import BarChart from '../BarChart/BarChart';

const AssetCard = () => {

  return (
    <Card hoverable
      title="asset name"
      style={{
        width: 240,
        boxShadow: 50,
        borderColor: 'green',
        borderWidth: 4
      }}
      cover={<img alt="example" src="logo192.png" />}
    >
      <b>Model: </b> aaaa <br />
      <b>Description: </b> aaaa <br />
      <b>Health</b>: xx% <br/>
      <BarChart/>
    </Card>
  )
}

export default AssetCard