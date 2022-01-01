import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

/**
 * Wave function from backend/contracts/waveportal.sol
 */
function Wave({ message, waver, timestamp }) {
  return (
    <WaveContainer>
      <WaveBody>
        <dl>
          <dt>From Address:</dt>
          <dt>{waver}</dt>
          <dt>TimeStamp:</dt>
          <dt>
            {formatDate(timestamp)} at {formatTime(timestamp).toUpperCase()}
          </dt>
        </dl>
        <Message>{message}</Message>
      </WaveBody>
      
    </WaveContainer>
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

export const WaveContainer = styled.div`

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  background-color: rgba(55, 65, 81, 0.8);



`;
export const WaveBody = styled.div`
  flex: 1;
  display: grid;
  position: relative;
  justify-content: center;

  margin: 1rem;
  dl{
    display: grid;
    gap: 5px 10px;
    grid-template-columns: auto 1fr;
    margin: 0;
  }
  dt{
    color: #6ee7b7;
    font-weight: 500;
    margin: 1rem;
  }
`;


export const Message = styled.div`
  text-align: center;
  color: aqua;
  margin-bottom: 2rem;
`;
