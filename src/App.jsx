// src/App.jsx
import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Image from './components/Image';
import Paragraph from './components/Paragraph';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Title />
      <SubTitle />
      <Image />
      <Paragraph />
    </div>
  );
};

export default App;
