import './App.css';
import Heading_Text_Button from './components/Heading_Text_Button';
import Heading_text from './components/heading_text';

function App() {
  return (
    <>
      <section>
        <Heading_Text_Button />
        <Heading_Text_Button />
        <Heading_Text_Button />
        <Heading_Text_Button />
      </section>
      <section>
        <Heading_text />
      </section>
    </>
  );
}

export default App;
