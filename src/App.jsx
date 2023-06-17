import './App.scss';
import WordList from './components/wordList/WordList';
import Header from './components/header/Header';

import CardSlider from './components/cardslider/CardSlider';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {

  return (
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
  );
}

export default App;
