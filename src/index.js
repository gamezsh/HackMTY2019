import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import axios from 'axios';
import Navbar from './components/Navbar/Navbar';



const App = function() {

  const [loading, setLoading] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);

  const selectFile = (e) => {

    setLoading(true)

    const data = new FormData();
    data.append('file',  e.target.files[0])
    axios.post('http://127.0.0.1:5000/upload', data)
    .then(success => {
      setLoading(false)
      setUploaded(true);
      console.log('success', success);
    })
    .catch(err => console.log('error', err))
  }

  return (
    <div>
      <Navbar />
      { loading && <p> is loading ...</p>}
      { uploaded && <h1> FILE </h1>}
      <input type="file" name="file" onChange={selectFile} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
