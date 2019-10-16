import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';

export const TaskDate = ({ setTaskDate,showTaskDate, setShowTaskDate }) => 
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <div
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format('DD/MM/YYYY'));
          }}
          data-testid="task-date-today"
          tabIndex={0}
          role="button"
        >
          <span>
            <FaSpaceShuttle />

        )