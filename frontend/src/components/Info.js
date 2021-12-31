import React from 'react';
import styled from 'styled-components';

const Intro = styled.p`
  text-align: center;
  color: white;
`;
export default function Info() {
  return (
    <Intro>
      Connect to an Ethereum Wallet and wave at me!
    </Intro>
    
  );
}


