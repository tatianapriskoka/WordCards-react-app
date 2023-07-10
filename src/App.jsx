import './App.scss';
import WordList from './components/wordList/WordList';
import Header from './components/header/Header';

import CardSlider from './components/cardslider/CardSlider';
import dataContext from './dataContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllWords } from './API/requests';



function App() {
  let [data, setData] = useState([]);
  let [isLoading, setLoading] = useState(false);
  let [isError, setError] = useState(null);
  let [gettingAllWords, setGettingAllWords] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAllWords();
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Ошибочка вышла')
        }
      })

      .then((response) => {
        setData(data = response);
        setLoading(false)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })

  }, []);

  return (
    <dataContext.Provider value={{ data, setData, isLoading, setLoading, isError, setError }}>

      <Router>
        <>
          <Header></Header>
          <main className='main'>
            <Routes>
              <Route path='/game' element={<CardSlider />} />;
              <Route exact path='/' element={<WordList />} />
            </Routes>

          </main>

        </>
      </Router>
    </dataContext.Provider>
  );
}

export default App;
