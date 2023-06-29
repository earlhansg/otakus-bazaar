import React from 'react'
import Checkout from '../components/Checkout'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../components/utils/theme';

const CheckoutLayout = () => {
  return (
    <ThemeProvider theme={theme}>
     <Checkout/>
    </ThemeProvider>
  )
}

export default CheckoutLayout
