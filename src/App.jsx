import React, { useContext } from 'react' // use snippt rafce to bring functional react component.
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'


const App = () => {

  const {showLogin} = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28
    min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <NavBar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
        <Route path='/result' element ={<Result/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

