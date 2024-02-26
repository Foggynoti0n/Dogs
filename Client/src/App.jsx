import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import Create from './views/create/Create'
import Detail from './views/detail/Detail'
import Landing from './views/landing/Landing'
import Nav from './components/NavBar/Nav/Nav'
import "./App.css";


function App() {
  
  return (
    <div className="App">
      <Router>
      {location.pathname !== "/" && <Nav />}
      <Routes>
      <Route exact path="/" element={ <Landing />} />{" "}
      <Route path="/home" element={<Home />} />
      <Route path="/dogs/:id" element={ <Detail />} />
      <Route path="/create" element={ <Create />} />
      </Routes>
    </Router>

    </div>
  );
}



export default App;