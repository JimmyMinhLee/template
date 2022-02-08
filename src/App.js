import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavigationBar from './Components/NavigationBar.js';
import Index from './Pages/Index.js';
import { BrowserRouter } from 'react-router-dom';
import theme from './Meta/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <NavigationBar />
        <Index />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
