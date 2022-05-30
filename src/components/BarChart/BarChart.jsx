import React from "react"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'Assets Health'
    },
    legend: {enabled: false},
  
    chart: {
      type: 'bar',
      height: 120,
    },
    
    series: [{
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
    }],
  
    xAxis: {
      categories: ["assets"],
    },
  
    yAxis: {
      title: {text: ""}
    },
  
    plotOptions: {
      series: {
        stacking: 'normal',
      }, 
    }
  }

  const BarChart = () => {
      return (
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      )
  }

export default BarChart