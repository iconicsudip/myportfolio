import Header from "./components/Header";
import {useEffect,useState} from 'react';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Projects from "./components/Projects";
import BacktoTop from "./components/BacktoTop";

function App() {
  const [scrollVal,setScroll] = useState(0);
  const [id,changeId] = useState(()=>window.location.pathname.split("/")[1])
  const scroll = (id) => {
    if(id==="/"){
      id = "home"
    }
    try{
      const section = document.querySelector( '#'+id );
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }catch{
      id=id
    }
  };
  function handleChange(event) {
    changeId(event.target.value);
  }
  useEffect(()=>{
    scroll(id);
  },[id]);
  useEffect(() => {
    const handleScroll = (event) => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App" >
      <Router>
        <Header scrollVal = {scrollVal}/>
        <Routes>
          <Route exact path="/" element={<Body change={changeId}/> } />
          <Route exact path="/service"  element={<Body change={changeId}/>} />
          
          <Route exact path="/portfolio" element={<Body change={changeId}/>} />
          <Route exact path="/resume" element={<Body change={changeId}/>} />
          <Route exact path="/contact" element={<Body change={changeId}/>} />
          <Route exact path="/testimonial" element={<Body change={changeId}/>} />
          <Route exact path="/service" element={<Body />} change={changeId}/>
          <Route exact path="/projects" element={<Projects change={changeId}/>} />
          <Route exact path="/achievement" element={<Body change={changeId}/>} />
        </Routes>
        <Footer />
        <BacktoTop scrollVal = {scrollVal}/>
      </Router>
    </div>
  );
}

export default App;
