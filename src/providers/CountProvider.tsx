import React, { PropsWithChildren, useState } from 'react'
import CountContext from '~/contexts/CountContext'

const CountProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [count, setCount] = useState(0)

  const countAdd = (n: number): void => setCount(count + n)
  const countSub = (n: number): void => setCount(count - n)
  const countSet = (n: number): void => setCount(n)
  const countReset = (): void => setCount(0)

  return (
    <CountContext.Provider
      value={{
        count: count,
        add: countAdd,
        sub: countSub,
        set: countSet,
        reset: countReset
      }}
    >
      {children}
    </CountContext.Provider>
  )
}
export default CountProvider
