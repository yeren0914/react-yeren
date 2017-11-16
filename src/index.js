import React from 'react';
import ReactDOM from  'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      React Router 4 
      <Link to="/users">用户</Link>
      <Link to="/">首页</Link>
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

ReactDOM.render(<App />,document.getElementById('app'));