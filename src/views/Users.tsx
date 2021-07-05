import React, { useContext } from 'react'
import CountContext from '~/contexts/CountContext'

const Home: React.FC<{}> = () => {
  const { count } = useContext(CountContext)

  return (
    <div className="px-4">
      <p>count: {count}</p>
      <p>Users</p>
    </div>
  )
}

export default Home
