import React from 'react';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalSytle } from './styles/global';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`

export function App() {
  return (
    <div>
      <Header />
      <Dashboard/>
      <GlobalSytle />
    </div>
  );
}

