import './App.css';

// libs
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// custom
import {Home,Error,Success} from './pages'


function App() {
  return (
    <Router>
      <ToastContainer />
      {/* <Navbar />
      <Sidebar /> */}
      <Routes>
        {/* base pages */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/success' element={<Success />}></Route>

        {/* error - unkown pages */}
        <Route path='/*' element={<Error />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App;
