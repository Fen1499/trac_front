import React, {useState} from "react"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

  const BarChart = ( {p_title, p_data, p_height, p_category, p_ceiling} ) => {
      const [options, setOptions] = useState(
        {
          title: {
            text: p_title
          },
          legend: {enabled: false},
        
          chart: {
            type: 'bar',
            height: p_height,
          },
          
          series: p_data,
        
          xAxis: {
            categories: [p_category],
          },
        
          yAxis: {
            title: {text: ""},
            floor: 0,
            ceiling: p_ceiling
          },
        
          plotOptions: {
            series: {
              stacking: 'normal',
            }, 
          }
        }
      )

      return (
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      )
  }

export default BarChart