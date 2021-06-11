import React from 'react'
import './App.css'
import projects from './component/projects'
import about from './component/about'
import Nav from './component/Nav'
import contact from './component/contact'
import Skills from './component/Skills'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import background from './image.png'
import Typical from 'react-typical'

function App() {
    return (
        <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/projects' component={projects} />
                <Route path='/about' component={about} />
                <Route path='/contact' component={contact} />
                <Route path='/Skills' component={Skills} />
            </Switch>
            
        </div>
        </Router>
    )
}
const Home = ()=> (

    <div
    class="bg_image"
    style={{
      backgroundImage: 'url('+background+')',
      backgroundSize: "cover",
      height: "87vh",
      margin:"0",
      position:"relative",
      padding:"0"
    }}
  >
      <div>
     <Typical
     className="anim"
     steps={['Hello,', 1000, 'Iam Bhargavi..', 500]}
     loop={Infinity}
     wrapper="p"
      />
      </div>
  </div>
);

export default App


