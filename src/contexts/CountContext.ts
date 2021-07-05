import { createContext } from 'react'

export interface CountContext {
  count: number
  add: (count: number) => void
  sub: (count: number) => void
  set: (count: number) => void
  reset: () => void
}

export default createContext<CountContext>({
  count: 0,
  add: () => {},
  sub: () => {},
  set: () => {},
  reset: () => {}
})
