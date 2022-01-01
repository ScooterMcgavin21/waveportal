import React from 'react';
import styled from 'styled-components';
import useWallet from "../../hooks/useWallet";
//import { NavBtn } from '../ButtonTest';



/**
 * Nav component returns the navbar with wallet connection style
 */
export default function Nav() {
  const {walletConnected, connectWallet, walletInstalled} = useWallet();
  return (
    <NavContainer>
      <h1>Wave Portal</h1>
        {walletConnected && (
          <div>
            <DotConnect />
            Wallet Connected
          </div>
        )}
        <div>
          {walletInstalled && !walletConnected && (
              <NavBtn onClick={connectWallet}>Connect Wallet</NavBtn>
          )}    
        </div>
        
    </NavContainer>
  );
};
const NavContainer = styled.header`
  display: grid;
  height: 5rem;
  width: 100%;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5), -1px -1px 2px #aaa,
    1px 1px 2px #555;
  backdrop-filter: blur(0.8rem);
  padding: 1.5rem;
  animation: 1s cubic-bezier(0.16, 1, 0.3, 1) cardEnter;
  /* background: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%); */
  h1{
    color: aqua;
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
export const NavBtn = styled.div`
  display: inline-block;
  cursor: pointer;
  background: linear-gradient(rgba(31, 41, 55), rgba(31, 41, 55)) padding-box, linear-gradient(to right, #7b4397 0%, #dc2430 100%) border-box;
  border: 3px solid transparent;
  color: aqua;
  background-color: rgba(31, 41, 55);
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  padding: 7px 22px;
  transition: all .5s ease;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  &:hover,
  &:focus {
    background: linear-gradient(to right, #7b4397 0%, #dc2430 100%) border-box;
    border: 3px solid transparent;
    color: yellow;
    transition: all .5s ease;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
`;
