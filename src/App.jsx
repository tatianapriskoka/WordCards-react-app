import './App.scss';
import WordList from './components/wordList/WordList';
import Search from './components/searchForm/SearchForm';
import WordCard from './components/wordCard/WordCard';
import Header from './components/header/Header';
import CardSlider from './components/cardSlider/CardSlider';

function App() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <WordList></WordList>
        <CardSlider></CardSlider>
      </main>
    </>
  );
}

export default App;
