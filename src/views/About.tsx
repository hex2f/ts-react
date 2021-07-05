import React, { useContext } from 'react'
import CountContext from '~/contexts/CountContext'

const Home: React.FC<{}> = () => {
  const { count } = useContext(CountContext)

  return (
    <div className="px-4">
      <p>About</p>
      <p>count: {count}</p>
    </div>
  )
}

export default Home
