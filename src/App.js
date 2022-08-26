import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import { ProvideAuth } from './hooks/useAuth';
import { useAuth } from './hooks/useAuth'; 
import Routing from './Routing';
function App() {

  const { user } = useAuth();

  return (
    <ChakraProvider theme={theme}>
    <Routing> </Routing>
    {user ? <Profile />  : <LogIn />}
    </ChakraProvider>
  );
}

export default App;
