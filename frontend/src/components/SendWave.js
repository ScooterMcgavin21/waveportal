import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWallet, { WriteStatus } from '../hooks/useWallet';
//import { Derka } from './ButtonTest';
import WaveStatus from './WaveStatus';
function SendWave({ loading, writeLoading, totalWaves, wave }) {
  const {walletConnected} = useWallet();
  const [message, setMessage] = useState("");

  /**
   * Hook to clear text input oncce written
   */
  useEffect(() => {
    if (writeLoading === WriteStatus.None) {
      setMessage("");
    }
  }, [writeLoading]);
  return (
    <>
      {walletConnected && (
        <FormContainer>
        <HorizontalRule />
        <InputContainer>
          <Input 
            id={message}
            value={message}
            placeholder='Write A Message As You Wave!'
            onChange={(event) => setMessage(event.target.value)} 
          />
          
        </InputContainer>
        <BtnContainer>
          <WaveBtn onClick={() => wave(message)}>
          👋 Wave 👋
          </WaveBtn>
      
        </BtnContainer>
        <HorizontalRule  />
        <WaveStatus loading={loading} writeLoading={writeLoading} totalWaves={totalWaves} />
      </FormContainer>
      )}
    </>
  );
}


export default SendWave;

const FormContainer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;
const BtnContainer = styled.div`
  margin: 2rem 0 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;
const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  
  width: 80%;
  height: 3rem;
  padding: 1rem;
  text-align: center;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }

`;

const WaveBtn = styled.button`
  background-color: transparent;
  color: white;
  width: 50%;
  height: 25%;
  padding: 12px;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  font-size: 15px;
  border: 8px solid transparent;
  border-image: -webkit-linear-gradient(right, #35c9ff, #27d853);
  border-image-slice: 1;

  &:hover {
    cursor: pointer;

    background-image: -webkit-linear-gradient(right, #35c9ff, #27d853);
  }
`;
