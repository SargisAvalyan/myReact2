import './App.css';
import FontSIzeChanger from './Components/fontsizeChanger';
import InputValues from './Components/Inputes';
import NumberList from './Components/numberlist';
import Compo from './Components/userClick';
function App() {
  return (
    <div className="App">
       <Compo/> 
   <FontSIzeChanger/> 
   <InputValues/>
   <NumberList/>
    </div>
  );
}

export default App;
