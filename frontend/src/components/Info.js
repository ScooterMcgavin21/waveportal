import React from 'react';
import styled from 'styled-components';

export default function Info() {
  return (
    <Intro>
      Connect to an Ethereum Wallet and wave at me!
    </Intro>
    
  );
}

const Intro = styled.p`
  text-align: center;
  color: white;
  padding: 1rem;
`;
