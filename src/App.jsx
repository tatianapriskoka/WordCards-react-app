import './App.scss';
import WordList from './components/wordList/WordList';
import Search from './components/searchForm/SearchForm';
import WordCard from './components/wordCard/WordCard';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <WordList></WordList>

      </main>
    </>
  );
}

export default App;
