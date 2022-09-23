import Header from "./components/Header";
import {useEffect,useState} from 'react';
import Intro from "./components/Intro";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [scrollVal,setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = event => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header scrollVal = {scrollVal}/>
      <Intro />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
