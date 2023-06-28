import React from 'react'
import {
  ScheduleComponent ,  ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {Header} from '../components';
import {scheduleData} from '../data/dummy'
const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:-10 bg-white rounded-3xl'>
      <Header category= 'app' title ='Calendar'/>
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Agenda, Resize, DragAndDrop, Month]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
