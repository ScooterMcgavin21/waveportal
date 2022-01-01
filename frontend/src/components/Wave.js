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
          <dd>
            {formatDate(timestamp)} at {formatTime(timestamp)}
          </dd>
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
  display: flex;
  gap: 20px;
  padding: 15px 10px;
  justify-content: flex-start;
  background-color: rgba(55, 65, 81, 0.8);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`;
export const WaveBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  dl{
    display: grid;
    gap: 5px 10px;
    grid-template-columns: auto 1fr;
    margin: 0;
  }
  dt{
    color: #6ee7b7;
    font-weight: 500;
    margin: 0;
  }
  dd{
    margin: 0;
  }
`;


export const Message = styled.div`
  margin-top: 10px;
  text-align: center;
`;
