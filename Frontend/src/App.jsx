import React from 'react'
import Mainroutes from './routes/Mainroutes'
import "./shered/style/global.scss";
import Navbar from './components/Navbar';
import "./pages/style/App.scss"

const App = () => {
  return (
    <div className='main-pages'>
      <Navbar/>
       <Mainroutes />
    </div>
   
  )
}

export default App