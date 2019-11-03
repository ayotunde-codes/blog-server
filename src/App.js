import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import HeaderHead from './component/header';
import Article from './component/articles';

// fetch('http://127.0.0.1:8000/articles/').then((res) => {
//   let g = res.json();
//   console.log(g);
//   return g
// }).then(result => console.log(result))



function App() {
  const [data, setData] = useState([])

useEffect(() => {
  getData()
  }, [])


async function getData() {
  let response = await fetch('http://localhost:8000/articles')
  response = await response.json()
  setData(response)
}

  return (
    <div className="App">
         <HeaderHead />
         <Article articleList={data} />
    </div>
  );
}

export default App;
