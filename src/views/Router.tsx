import React from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from '~/views/Home'
import About from '~/views/About'
import Users from '~/views/Users'

const Router: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </nav>

        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
