import './App.css';
import { useState } from 'react'
const App = () => {
  const [val, setVal] = useState('')

  const onChange = (e) => {
    setVal(e.target.value)
  }

  return (
    <>
      <textarea onChange={onChange}/>
      {val && <div className="imageWrapper">
        <img src={`data:image/png;base64, ${val}`} alt='png' />
      </div>}
    </>
  );
}

export default App;
