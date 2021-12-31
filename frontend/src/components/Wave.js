import dayjs from 'dayjs';
import React from 'react';
import './Wave.css';
/**
 * Wave function from backend/contracts/waveportal.sol
 */
function Wave({ message, address, timestamp }) {
  return (
    <div className='wave'>
      <div className='wave-body'>
        <dl>
          <dt>From Address:</dt>
          <dt>{address}</dt>
          <dt>TimeStamp:</dt>
          <dd>
            {formatDate(timestamp)} at {formatTime(timestamp)}
          </dd>
        </dl>
        <div className='message'>{message}</div>
      </div>
      
    </div>
  )
}

export default Wave;
/**
 * Day.js APIs to parse, validate, manipulate, and display dates and times.
 */
function formatDate(timestamp){
  return dayjs(timestamp).format('MMM D, YYYY');
};
function formatTime(timestamp){
  return dayjs(timestamp).format('h:mm:ss a');
};
