import React from 'react'
import Test1 from './Test1'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'



const Reactqueries = () => {
  const queryClient= new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Test1 />
    </QueryClientProvider>
  )
}

export default Reactqueries
