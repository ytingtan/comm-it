import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

const Routing = () => {
  return (
    <BrowserRouter>
            <Routes>
            <Route
                  path="/" 
                  element= { <LogIn/> } 
              />
              <Route
                  path="/signup" 
                  element= { <SignUp/> } 
              />
              <Route
                  path="/profile" 
                  element= { <Profile/> } 
              />
            </Routes>
          </BrowserRouter>
  )
}

export default Routing
