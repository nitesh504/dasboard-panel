import React, { useContext } from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries} from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components'; 
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';

const Area = () => {
  const {currentMode} = useStateContext();
  return (
   <div>
    <Header category='Area' title = 'inflation rate'/>
    <ChartComponent id = "line-chart" 
    height = "420px"
    primaryXAxis = {areaPrimaryXAxis}
    primaryYAxis ={areaPrimaryYAxis}
    chartArea ={{border: {width:0}}}
    tooltip ={{enable:true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}>

      <Inject  services={[SplineAreaSeries, DateTime, Legend ]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index)=>
        <SeriesDirective key ={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent> 
   </div>
  )
}

export default Area;
