import { Route, Routes } from 'react-router-dom'

import logo from './logo.svg'
import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'
import Navigation from './routes/navigation/navigation.components'

import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}></Route>
        <Route index element={<Home />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
      </Routes>

      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}

export default App
