'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'
interface Props {
  children: React.ReactNode
}
const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <NextUIProvider>
      <NextThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}

export default ThemeProvider
