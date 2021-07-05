import React, { useContext } from 'react'
import CountContext from '~/contexts/CountContext'

const Home: React.FC<{}> = () => {
  const { add, sub, count } = useContext(CountContext)

  return (
    <div className="px-4">
      <p>count: {count}</p>
      <div className="flex gap-2">
        <button onClick={() => add(1)}>+</button>
        <button onClick={() => sub(1)}>-</button>
      </div>
    </div>
  )
}

export default Home
