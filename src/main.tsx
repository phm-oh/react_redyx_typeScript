import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


// import App from './App.tsx'
import './index.css'
import HomePage from './pages/home-page.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <App /> */}
      <HomePage/>
    </ChakraProvider>
  </React.StrictMode>,
)
