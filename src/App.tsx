import React from 'react';
import styled from 'styled-components';
import { GlobalSytle } from './styles/global';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`

export function App() {
  return (
    <div>
      <header>
        <Title>
          Hello 
        </Title>
      </header>
        <GlobalSytle />
    </div>
  );
}

