export const datePickersData = [
  {
    id: "basic-date-picker",
    title: "Basic Date Picker",
    description: "Simple and responsive date selection component",
    preview: `
  <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
    <div class="space-y-4">
      <label class="block text-gray-700 font-medium">
        Select Date
      </label>
      <input 
        type="date" 
        class="w-full px-4 py-2 
               border border-gray-300 
               rounded-md 
               focus:ring-2 
               focus:ring-blue-500 
               focus:outline-none"
      />
    </div>
  </div>`,
    code: `import React, { useState } from 'react';
  
  const BasicDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleDateChange = (event) => {
      const newDate = event.target.value;
      setSelectedDate(newDate);
    };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Select Date
          </label>
          <input 
            type="date" 
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full px-4 py-2 
                       border border-gray-300 
                       rounded-md 
                       focus:ring-2 
                       focus:ring-blue-500 
                       focus:outline-none"
          />
          {selectedDate && (
            <p className="text-sm text-gray-600 mt-2">
              Selected: {new Date(selectedDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    );
  };
  
  export default BasicDatePicker;`,
    category: "date-pickers",
  },
  {
    id: "range-date-picker",
    title: "Advanced Date Range Picker",
    description: "Comprehensive date range selection with validation",
    preview: `
  <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
    <div class="space-y-4">
      <div>
        <label class="block text-gray-700 font-medium mb-2">
          Start Date
        </label>
        <input 
          type="date" 
          class="w-full px-4 py-2 
                 border border-gray-300 
                 rounded-md 
                 focus:ring-2 
                 focus:ring-blue-500 
                 focus:outline-none"
        />
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">
          End Date
        </label>
        <input 
          type="date" 
          class="w-full px-4 py-2 
                 border border-gray-300 
                 rounded-md 
                 focus:ring-2 
                 focus:ring-blue-500 
                 focus:outline-none"
        />
      </div>
    </div>
  </div>`,
    code: `import React, { useState } from 'react';
  
  const RangeDatePicker = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState('');
  
    const validateDateRange = (start, end) => {
      if (start && end) {
        const startDateTime = new Date(start).getTime();
        const endDateTime = new Date(end).getTime();
  
        if (startDateTime > endDateTime) {
          setError('Start date must be before end date');
          return false;
        }
      }
      setError('');
      return true;
    };
  
    const handleStartDateChange = (event) => {
      const newStartDate = event.target.value;
      setStartDate(newStartDate);
      validateDateRange(newStartDate, endDate);
    };
  
    const handleEndDateChange = (event) => {
      const newEndDate = event.target.value;
      setEndDate(newEndDate);
      validateDateRange(startDate, newEndDate);
    };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Start Date
            </label>
            <input 
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="w-full px-4 py-2 
                         border border-gray-300 
                         rounded-md 
                         focus:ring-2 
                         focus:ring-blue-500 
                         focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              End Date
            </label>
            <input 
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="w-full px-4 py-2 
                         border border-gray-300 
                         rounded-md 
                         focus:ring-2 
                         focus:ring-blue-500 
                         focus:outline-none"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          {startDate && endDate && !error && (
            <div className="mt-4 text-sm text-gray-600">
              <p>Selected Range:</p>
              <p>
                {new Date(startDate).toLocaleDateString()} - 
                {new Date(endDate).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default RangeDatePicker;`,
    category: "date-pickers",
  },
  {
    id: "inline-calendar-picker",
    title: "Interactive Calendar Picker",
    description: "Full-featured inline calendar with date selection",
    preview: `
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
    <div class="calendar-grid grid grid-cols-7 gap-2 text-center">
      <div class="col-span-7 flex justify-between items-center mb-4">
        <button class="p-2 hover:bg-gray-100 rounded">&lt;</button>
        <span class="font-bold">May 2024</span>
        <button class="p-2 hover:bg-gray-100 rounded">&gt;</button>
      </div>
      <div class="font-semibold text-gray-500">Sun</div>
      <div class="font-semibold text-gray-500">Mon</div>
      <div class="font-semibold text-gray-500">Tue</div>
      <div class="font-semibold text-gray-500">Wed</div>
      <div class="font-semibold text-gray-500">Thu</div>
      <div class="font-semibold text-gray-500">Fri</div>
      <div class="font-semibold text-gray-500">Sat</div>
    </div>
  </div>`,
    code: `import React, { useState, useMemo } from 'react';
  
  const InlineCalendarPicker = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
  
    const generateCalendarDays = useMemo(() => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      
      const firstDayOf the month = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const calendarDays = [];
  
      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null); // Empty slots for days before the first of the month
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
      }
  
      return calendarDays;
    }, [currentDate]);
  
    const handleDateClick = (day) => {
      if (day) {
        setSelectedDate(day);
      }
    };
  
    const getDynamicClassName = (day) => {
      let baseClasses = 'p-2 rounded';
      if (selectedDate === day) {
        return \`\${baseClasses} bg-blue-500 text-white\`;
      }
      return \`\${baseClasses} cursor-pointer hover:bg-gray-100\`;
    };
  
    const changeMonth = (direction) => {
      setCurrentDate((prevDate) => {
        const newDate = new Date(prevDate);
        newDate.setMonth(prevDate.getMonth() + direction);
        return newDate;
      });
    };
  
    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="calendar-grid grid grid-cols-7 gap-2 text-center">
          <div className="calendar-header col-span-7 flex justify-between items-center mb-4 text-gray-700">
            <button className="p-2 hover:bg-gray-100 rounded" onClick={() => changeMonth(-1)}>&lt;</button>
            <span className="font-bold">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
            <button className="p-2 hover:bg-gray-100 rounded" onClick={() => changeMonth(1)}>&gt;</button>
          </div>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="font-semibold text-gray-500">{day}</div>
          ))}
          {generateCalendarDays.map((day, index) => (
            <div 
              key={index} 
              className={getDynamicClassName(day)}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
        {selectedDate && (
          <p className="mt-2 text-sm text-gray-600">
            Selected Date: {selectedDate}/{currentDate.getMonth() + 1}/{currentDate.getFullYear()}
          </p>
        )}
      </div>
    );
  };
  
  export default InlineCalendarPicker;`,
    category: "date-pickers",
  },
];
