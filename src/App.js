import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [repositories, setRepositories] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://api.github.com/search/repositories?q=${inputText}`)
      setRepositories(res.data.items);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div>
        <input className='search-repo-field' type='text' value={inputText} onChange={e => setInputText(e.target.value)} />
        <button className='primary-button' onClick={fetchData}>search</button>
      </div>
      <ul className='repo-list'>
        {repositories.map(repo => <li className='repo-list__item' key={repo.id}><a href={repo.html_url}>{repo.full_name}</a></li>)}
      </ul>
    </div>
  );
}

export default App;
