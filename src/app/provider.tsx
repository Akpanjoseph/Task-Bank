'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

// chakar ui provider file

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}