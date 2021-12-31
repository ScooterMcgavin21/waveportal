import React from 'react';
import styled from 'styled-components';
import useWallet from "../hooks/useWallet";
const NavContainer = styled.header`
  display: grid;
  height: 5rem;
  width: 100%;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  color: white;
  background: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
  h1{
    color: white;
  }
`;
const DotConnect = styled.span`
  display: inline-block;
  margin: 1px 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #34d399;
  box-shadow: 0 0 30px 10px #0ff;
  padding-left: 10px;    
`;
/**
 * Nav component returns the navbar with wallet connection style
 */
export default function Nav() {
  const {walletConnected} = useWallet();
  return (
    <NavContainer>
      <h1>Wave Portal</h1>
        {walletConnected && (
          <div>
            <DotConnect />
            Wallet Connected
          </div>
        )}  
    </NavContainer>
  )
}


