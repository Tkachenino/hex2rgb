import {useState} from 'react';
import Converter from './compontents/Converter';
import './App.css';

function App() {
  const [value, setValue] = useState('#FF5733');
  const [color, setColor] = useState(value);
  const [warning, setWarning] = useState(false);

  

  const changeInput = (e) => {
    const eValue = e.target.value;
    setValue(eValue);
    if (eValue.length === 7) {      
      if ((/#[0-9|a-f|A-F]{6}$/).test(eValue)) {
        setColor(e.target.value);
        setWarning(false);
      } else {
        setWarning(true);
      }
     }
  };



  const style = {
    backgroundColor: color
  }

  return (
    <div className="App" style={style}>
      <Converter color={color} value={value} warning={warning} onInputChange={changeInput}/>     
    </div>
  );
}

export default App;
