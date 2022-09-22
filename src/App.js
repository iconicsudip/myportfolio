import Header from "./components/Header";
import {useEffect,useState} from 'react';
import Intro from "./components/Intro";

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
    </div>
  );
}

export default App;
