import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import axios from 'axios';
import Navbar from './components/Navbar/Navbar';

const Landing = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <img 
        style={{  width: '50%',justifyContent: 'center', alignItems: 'center' }}
        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JDA_Software_Logo.svg/1200px-JDA_Software_Logo.svg.png'} />
    </div>
  );
}

const Display = props => {
  const { uploaded, loading, selectFile } = props;
  return (
    <div>
      <Navbar />
      { loading && <p> is loading ... </p> }
      { uploaded && <h1> FILE </h1> }
      <input type="file" name="file" onChange={selectFile} />
    </div>
  );
};


const App = function() {

  const [loading, setLoading] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);
  const [landing, setLanding] = React.useState(true);

  const selectFile = (e) => {
    setLoading(true);
    setUploaded(false);
    const data = new FormData();
    data.append('file',  e.target.files[0])
    axios.post('http://127.0.0.1:5000/upload', data)
    .then(success => {
      setLoading(false);
      setUploaded(true);
      console.log('success', success);
    })
    .catch(err => console.log('error', err))
  }

  React.useEffect(() => {
    setTimeout(() => {
      setLanding(false);
    }, 2000)
  })

  return (
    <div>
      { 
        landing ? <Landing /> : 
        <Display 
          selectFile={selectFile}
          loading={loading}
          uploaded={uploaded}
        />
      }
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
