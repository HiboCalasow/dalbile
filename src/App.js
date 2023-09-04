 import {Route,Routes}from 'react-router-dom'
import Home from './pages/Home';
import Blog from'./pages/Blog'
import Feature from './pages/Feature'
import Service from './pages/Service'
import About  from './pages/About'


function App() {
    return ( 
        <>
      
    <Routes>
        <Route path='/'  element={ <Home /> }/>
        <Route path='service'  element={ <Service /> }/>
        <Route path='feature'  element={ <Feature /> }/>
        <Route path='blog'  element={ <Blog /> }/>
        <Route path='about' element={< About/>} />
       
    </Routes>
        </>
     );
}

export default App;