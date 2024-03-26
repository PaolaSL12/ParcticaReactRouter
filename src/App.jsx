import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./pages/Header/Header"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import NotFound from "./components/NotFound/NotFound"

const App = () => {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/contact" element={ <Contact /> }/>
      <Route path="*" element={ <NotFound />}/>
    </Routes>
    </div>
  )
}

export default App