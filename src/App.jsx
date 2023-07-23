import './App.scss';
import WordList from './components/wordList/WordList';
import Header from './components/header/Header';
import CardSlider from './components/cardslider/CardSlider';


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

import { Provider } from 'mobx-react';
import WordsStore from './stores/WordsStore';



function App() {
  const store = {
    wordsStore: new WordsStore()
  };
  return (
    <Provider {...store}>

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
    </Provider>
  );
}

export default App;
