"use client";

import React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const today = new Date();
    const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const day = today.getDate().toString().padStart(2, '0');

        const customFormat = `${year}-${month}-${day}`;

export default function CalendarClient() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar defaultValue={dayjs(customFormat)} className='h-full'/>
    </LocalizationProvider>
  );
}