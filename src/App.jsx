import React from 'react';
import './App.css';
import { Container } from './Components/Container/index.container';
import { Logo } from './Components/Logo/index.logo';
import { Analytics } from './Components/Analytics/index.analytics';

function App() {
  return (
    <Container className="container">
      <Logo />
      <Analytics />
    </Container>
  );
}

export default App;
