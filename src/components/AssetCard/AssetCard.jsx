import React from 'react';
import { Card } from 'antd';
import BarChart from '../BarChart/BarChart';

const AssetCard = () => {

    const demo_data = [{
      name: "out",
      data: [60],
      color: "grey"
    }, {
      name: "blue",
      data: [40],
      color: "blue"
    }]

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
      <BarChart
          p_title={"aaaa"}
          p_height={95}
          p_category = {"health"}
          p_data={demo_data}
          p_ceiling={100}
      />
    </Card>
  )
}

export default AssetCard