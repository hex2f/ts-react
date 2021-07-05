import React, { PropsWithChildren } from 'react'

import CountProvider from '~/providers/CountProvider'

const AppProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <CountProvider>
      {children}
    </CountProvider>
  )
}
export default AppProvider
