import './App.scss';
import WordList from './components/wordList/WordList';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Search from './components/searchForm/SearchForm';
import CardSlider from './components/cardslider/CardSlider';
import WordCard from './components/wordCard/WordCard';

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
