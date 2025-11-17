"use client"
import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import { ChevronDown, Search } from 'lucide-react'; 
import FilterIcon from "@/app/components/ui/FilterIcon";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs('2023-08-01'));
  const [searchTerm, setSearchTerm] = useState('');

  // Memoizing current year and month
  const { currentYear, currentMonth } = useMemo(() => {
    return {
      currentYear: selectedDate.year(),
      currentMonth: selectedDate.format('MMMM'),
    };
  }, [selectedDate]);

  // Memoizing available years and months
  const availableYears = useMemo(() => {
    const year = dayjs().year();
    return Array.from({ length: 11 }, (_, i) => year - 5 + i);
  }, []);

  const availableMonths = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => dayjs().month(i).format('MMMM'));
  }, []);

  // Handlers
  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value);
    setSelectedDate(selectedDate.year(newYear));
  };

  const handleMonthChange = (event) => {
    const newMonthName = event.target.value;
    const newMonthIndex = availableMonths.findIndex(m => m === newMonthName);
    setSelectedDate(selectedDate.month(newMonthIndex));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className='-translate-y-5'>
      <div className="flex items-center space-x-4 p-4 rounded-lg shadow-md text-black">
        
        {/* Date Selector */}
        <div className="flex items-center bg-secondary text-white py-3 px-4 rounded-lg p-2 space-x-2 shadow-inner">
          <select 
            value={currentYear} 
            onChange={handleYearChange}
            className="bg-secondary appearance-none focus:outline-none cursor-pointer text-base font-semibold"
            aria-label="Select Year"
          >
            {availableYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select
            value={currentMonth}
            onChange={handleMonthChange}
            className="bg-secondary appearance-none focus:outline-none cursor-pointer text-base font-semibold pr-4"
            aria-label="Select Month"
          >
            {availableMonths.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <ChevronDown size={18} className="text-gray-500 pointer-events-none -ml-4" />
        </div>

        {/* Search and Filter */}
        <div className="flex items-center bg-secondary text-white rounded-lg p-3 space-x-2 flex-grow max-w-sm shadow-inner">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-transparent focus:outline-none text-base w-full"
            aria-label="Search"
          />
        </div>

        <div className="bg-secondary p-4 rounded-md">
          <FilterIcon/>
        </div>
      </div>
    </form>
  );
};

export default DatePicker;
