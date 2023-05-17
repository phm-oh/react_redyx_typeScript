import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import {enUS , th} from 'date-fns/locale'

const locales = {
  'th-TH': th,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux-toolkit/hooks'
import { selectRoomBookingSate, getRoomBookingThunk } from '../../redux-toolkit/room/room-slice'

const DHome = () => {
  const dispatch = useAppDispatch();
  const { roomBooking } = useAppSelector(selectRoomBookingSate);



  useEffect(() => {
    dispatch(getRoomBookingThunk());
  }, [])

  const onselectEvent = (calevent: any) => {
      alert(JSON.stringify(calevent));
  }

  return (

    <>
      <h1>รายการจองห้องประชุม</h1>

      <Calendar
        culture='th-TH'
        localizer={localizer}
        events={[...(roomBooking?.events != undefined ? roomBooking.events: [])]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={onselectEvent}
        views={['month']}
      />

    </>

  )
}

export default DHome
