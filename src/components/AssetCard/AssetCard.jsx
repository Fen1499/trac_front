import React from 'react';
import { Card } from 'antd';
import BarChart from '../BarChart/BarChart';

const AssetCard = () => {

    const cardStyle = {
      display: 'flex',
      'flex-direction': 'column',
      borderColor: 'green',
      borderWidth: 4
    }

  return (
    <Card 
      title="asset name"
      style={cardStyle}
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