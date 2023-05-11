import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'


// import App from './App.tsx'
import './style/global.css'
import router from './routes/root.tsx'





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <App /> */}
      {/* <HomePage/> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
